# 10-7-26 Rework

I'ts been a while since I visited working on this site and there has been a renewed interest in a few aspect of this website. I think it needs a major overhaul while maintining core functionality and philosophy. Such as cleaning up the markdown essay serving system and integrate it with my new workflow


# Changes
## Look and Feel
- Not too different frm what it is now, relatively basic, but the css could be better, maybe use tailwind? Idk anything about css and I want something that is really easy to work with myself and be creative on. 

A major issue is being able to view it on mobile and have it scale/reform properly. this is one of the most important to me right now

## Functionality
I assume there may be a better way to handle the markdown essay page serving, and I want to make it so the system reads from a specified folder, which will be a folder shared between all my devices via syncthing that contains essays, blogs, project ideas, etc. Perhaps I will have a separate live/ folder with subfolders so that I can be sure only finished products are available on the site

## Serving
Looking forward, once this all looks fine, I hope to host it in a docker container in a docker lxc on my proxmox pve that a separate cloudflared lxc routes out to my domain. This is going to have little bearing on the creation of the website other than to know ahead of time this is the end goal and when you get here will probably have to create a dockerfile and docker-compose to make it nice and efficient!

## Documentation
I neglected to make any documentation in regards to how this website operates, please complete at least a few markdown files of explanations, examples, and include some outside resources for more learning

