# youtube-adblocker-premium

## Update
It's been only 4 days since my first commit, and I was really excited to build this. I had so many ideas integrating AI, UI, and the like. However, today I have decided to abandon this project. 

As you can see in uBlocks [Wiki](https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm) (uBlock is a big player in this space), Chrome is migrating to v3 application manifests. What that means for privacy extensions like these is basically forfeiture. Unless of course you could provide a hacky workaround, ship toned down features, etc, you're better off switching to a different browser at that point. 

Suffice to say, that isn't something i'm particularly excited or interested about... So it's on to the next.

I debated on deleting this repo, albeit at the end of the day, I still learned valuable concepts! Particularly in the Userscripts/Chrome extensions ecosystem - And it never hurts to add a few more tools to the toolbox.

Welcome to my **youtube-adblocker-premium** project! This extension will eventually help you block ads on YouTube, providing a seamless and uninterrupted viewing experience.

## Roadmap

- [x] Lightweight, around ~0.6KB compressed
- [x] Easy to install and use
- [x] Open-source and free
- [x] No tracking or data collection
- [ ] Blocks All YouTube Ads
- [ ] Zero dependencies (Script only)
- [ ] Create a Chrome extension from the bundle with UI, without using a userscript manager

## Usage

1. Load the extension in Chrome:
  - Open Chrome and navigate to `chrome://extensions/`
  - Enable "Developer mode" in the top right corner
  - Click "Load unpacked" and select the `youtube-adblocker-premium` directory

2. Alternatively, use as a userscript:
  - Install a userscript manager like Tampermonkey or Greasemonkey, or use the Chrome extension
  - Using userscripts chrome extension, add the file, `youtube-adblocker-premium-0.1.0-1.user.js` from the root directory. Copy code, or download and install the script. **This file is a work in progress. It's glitchy while ads run.**

3. Enjoy an ad-free YouTube experience!

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## License

This project is licensed under the MIT License.

## Contact

For any questions or suggestions, please open an issue or contact me via [email](mailto:inquiries@christianbmartinez.com?subject=[GitHub]%20youtube-adblocker-premium%20ABANDONED%20REPO).

Thank you for checking out **youtube-adblocker-premium**!
