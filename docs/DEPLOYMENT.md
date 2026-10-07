# Deployment Guide: Proxmox PVE, Docker LXC & Cloudflare Tunnel

This guide walks through deploying the website on your home lab architecture using Proxmox VE, a Docker LXC, and Cloudflare Tunnel (`cloudflared`).

---

## 1. Target Topology

```text
               Internet
                  │
                  ▼
         [Cloudflare Edge DNS / WAF]
                  │
                  ▼ (Encrypted outbound-only tunnel)
        ┌──────────────────────────────────────────────────┐
        │ Proxmox VE Server                                │
        │                                                  │
        │   ┌──────────────────────────────────────────┐   │
        │   │ LXC 1: cloudflared Tunnel               │   │
        │   │ (Routes domain -> Docker LXC IP:8080)    │   │
        │   └────────────────────┬─────────────────────┘   │
        │                        │ (Internal LAN)          │
        │   ┌────────────────────▼─────────────────────┐   │
        │   │ LXC 2: Docker Environment               │   │
        │   │                                          │   │
        │   │  [Syncthing] ──sync──> /sync/live        │   │
        │   │                           │              │   │
        │   │  [gatsby-portfolio Container] (Nginx)    │   │
        │   │   Exposes :8080                          │   │
        │   └──────────────────────────────────────────┘   │
        └──────────────────────────────────────────────────┘
```

**Key Advantages:**
1. **No Open Inbound Ports**: No router port forwarding or exposing your home IP.
2. **Lightweight & Efficient**: The static Nginx container runs in < 20MB of RAM.
3. **Automated Publishing**: Syncthing continuously syncs Markdown files from your laptop or phone directly into the host.

---

## 2. Docker & Compose Setup in Proxmox LXC

### Step 1: Ensure LXC Has Docker Support
When creating the LXC in Proxmox (e.g., Debian 12 / Ubuntu 22.04):
- Enable **Nesting**: `Options -> Features -> Nesting = 1`
- If unprivileged, enable `keyctl = 1`

### Step 2: Clone & Build the Container
Inside the Docker LXC:

```bash
# Clone the repository
git clone <repo-url> /opt/gatsby-portfolio
cd /opt/gatsby-portfolio

# Start the container via Docker Compose
docker compose up -d --build
```

The site will now be listening locally at `http://localhost:8080` (or `http://<LXC-IP>:8080`).

---

## 3. Configuring Cloudflare Tunnel (`cloudflared`)

In your dedicated `cloudflared` LXC (or container):

### Step 1: Add Public Hostname in Cloudflare Zero Trust
1. Go to the [Cloudflare Zero Trust Dashboard](https://one.dash.cloudflare.com/) -> **Networks** -> **Tunnels**.
2. Select your active tunnel and click **Configure**.
3. Under the **Public Hostnames** tab, click **Add a public hostname**:
   - **Subdomain / Domain**: e.g. `portfolio.yourdomain.com` or `yourdomain.com`
   - **Service Type**: `HTTP`
   - **URL**: `<DOCKER_LXC_IP>:8080` (e.g., `192.168.1.150:8080`)
4. Save the hostname. Cloudflare will automatically route HTTPS traffic to your container!

---

## 4. Syncthing Integration & Content Rebuilding

### Mounting Syncthing Content into the Build
You can have Syncthing sync your writing vault directly to `/opt/vault/live` on the Docker LXC host.

To build the site with your live Syncthing folder:

```bash
# Run build pointing to your live Syncthing folder
CONTENT_DIR=/opt/vault/live docker compose build
docker compose up -d
```

### Auto-Rebuild on Content Changes (Optional Script)
You can create a simple cron job or systemd path unit on the Docker LXC to rebuild whenever Syncthing receives updates:

```bash
#!/bin/bash
# /opt/scripts/rebuild-portfolio.sh
cd /opt/gatsby-portfolio
docker compose build --pull
docker compose up -d
```

---

## 5. Container Maintenance Commands

```bash
# Check container status & health
docker compose ps

# View access & error logs
docker compose logs -f

# Rebuild after pulling latest code changes
docker compose down
docker compose up -d --build

# Remove old unused build images to save disk space
docker image prune -f
```

---

## 6. Outside Learning Resources

- [Proxmox VE Documentation](https://pve.proxmox.com/pve-docs/)
- [Cloudflare Tunnel Official Documentation](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/)
- [Docker Compose Specification](https://docs.docker.com/compose/)
- [Nginx Official Beginner's Guide](https://nginx.org/en/docs/beginners_guide.html)
