# Ocelot Trio Website

A modern, responsive website for the Ocelot Trio jazz band featuring elegant design, interactive audio player placeholders, and smooth animations.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Audio Player**: Clickable play/pause buttons with progress bars (ready for MP3 integration)
- **Modern Jazz Aesthetic**: Sophisticated dark theme with gold accents
- **Smooth Animations**: Floating elements, scroll effects, and hover animations
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Contact Integration**: Clickable email and phone links
- **Social Media Ready**: Placeholder links for Spotify, Instagram, Facebook, and YouTube

## Files Structure

```
cursor_website/
├── index.html          # Main HTML structure
├── style.css           # CSS styling and animations
├── script.js           # JavaScript functionality
├── audio/              # Audio files directory
│   ├── paradise.m4a    # "If You Want To View Paradise"
│   ├── in_bloom.m4a    # "In Bloom"
│   └── hades_gift.m4a  # "Hades' Gift"
├── README.md           # This file
└── deploy-guide.md     # Deployment instructions
```

## How to Access the Website

### Method 1: Direct File Opening (Simplest)

1. **Navigate to the website folder**:
   - Open Finder (Mac) or File Explorer (Windows)
   - Go to: `Ocelots Website/cursor_website/`

2. **Open the website**:
   - Double-click on `index.html`
   - The website will open in your default web browser

### Method 2: Using a Local Web Server (Recommended)

Using a local web server provides better functionality and avoids potential CORS issues:

#### Option A: Using Python (Mac/Linux/Windows)

1. **Open Terminal** (Mac/Linux) or **Command Prompt** (Windows)

2. **Navigate to the website folder**:
   ```bash
   cd "/Users/sachinchopra/Documents/Ocelots Website/cursor_website"
   ```

3. **Start a local server**:
   
   For Python 3:
   ```bash
   python3 -m http.server 8000
   ```
   
   For Python 2:
   ```bash
   python -m SimpleHTTPServer 8000
   ```

4. **Open your browser** and go to:
   ```
   http://localhost:8000
   ```

#### Option B: Using Node.js (if installed)

1. **Install a simple HTTP server**:
   ```bash
   npm install -g http-server
   ```

2. **Navigate to the website folder**:
   ```bash
   cd "/Users/sachinchopra/Documents/Ocelots Website/cursor_website"
   ```

3. **Start the server**:
   ```bash
   http-server
   ```

4. **Open your browser** and go to the provided URL (usually `http://localhost:8080`)

#### Option C: Using PHP (if installed)

1. **Navigate to the website folder**:
   ```bash
   cd "/Users/sachinchopra/Documents/Ocelots Website/cursor_website"
   ```

2. **Start PHP server**:
   ```bash
   php -S localhost:8000
   ```

3. **Open your browser** and go to:
   ```
   http://localhost:8000
   ```

### Method 3: Using VS Code Live Server Extension

1. **Install Visual Studio Code** (if not already installed)
2. **Install the Live Server extension**:
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search for "Live Server"
   - Install the extension by Ritwick Dey

3. **Open the website folder**:
   - In VS Code, go to File > Open Folder
   - Select the `cursor_website` folder

4. **Start Live Server**:
   - Right-click on `index.html` in the file explorer
   - Select "Open with Live Server"
   - The website will open automatically in your browser

## Browser Compatibility

The website is compatible with all modern browsers:
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## Interactive Features

### Audio Player
- Click the play button (▶️) on any music card to play real audio
- The button changes to pause (⏸️) when playing
- Progress bar shows actual playback progress
- Only one track can play at a time
- Click anywhere on the progress bar to jump to that position
- Real audio files: "If You Want To View Paradise", "In Bloom", and "Hades' Gift"

### Navigation
- Click navigation links to smoothly scroll to sections
- Mobile hamburger menu for smaller screens
- Escape key closes mobile menu and pauses audio

### Keyboard Shortcuts
- **Space bar**: Play/pause current or first track
- **Escape**: Close mobile menu and pause audio

### Contact Information
- Click email address to open mail client
- Click phone number to initiate call (on mobile)
- Social media icons are ready for your links

## Customization for Your Band

### Adding Real MP3 Files

1. **Create an audio folder**:
   ```
   cursor_website/
   ├── audio/
   │   ├── midnight-reflections.mp3
   │   ├── urban-rhythms.mp3
   │   ├── velvet-dreams.mp3
   │   └── emerald-nights.mp3
   ```

2. **Update the JavaScript** in `script.js`:
   - Replace the simulated progress animation with actual HTML5 audio
   - Add audio elements for each track
   - Update the play/pause functions to control real audio

3. **Example audio integration**:
   ```javascript
   // Add this to your HTML for each track
   <audio id="track1" src="audio/midnight-reflections.mp3"></audio>
   
   // Update the playTrack function
   function playTrack(trackId, button) {
       const audio = document.getElementById(`track${trackId}`);
       audio.play();
       // ... rest of the function
   }
   ```

### Updating Content

1. **Band Information**: Edit the about section in `index.html`
2. **Song Names**: Update the music card titles and descriptions
3. **Contact Info**: Replace placeholder contact information
4. **Social Media**: Add your actual social media links
5. **Colors**: Modify CSS variables in `style.css` for different colors

### Adding Album Artwork

1. **Add images to a folder**:
   ```
   cursor_website/
   ├── images/
   │   ├── album1.jpg
   │   ├── album2.jpg
   │   └── ...
   ```

2. **Update the music cards** in `index.html`:
   ```html
   <div class="music-artwork">
       <img src="images/album1.jpg" alt="Album Name">
   </div>
   ```

## Troubleshooting

### Website Not Loading Properly
- Try using Method 2 (local web server) instead of opening the file directly
- Check that all files are in the same folder
- Ensure JavaScript is enabled in your browser

### Fonts Not Loading
- The website uses Google Fonts, so an internet connection is required
- If offline, the website will fall back to system fonts

### Mobile Menu Not Working
- Make sure JavaScript is enabled
- Try refreshing the page
- Check browser console for any errors

### Audio Player Issues
- If audio doesn't play, check browser console for errors
- Some browsers require user interaction before playing audio
- M4A files are supported in most modern browsers
- If you encounter issues, try refreshing the page

## Support

If you encounter any issues:

1. **Check browser console** for error messages (F12 > Console)
2. **Try a different browser** to isolate the issue
3. **Ensure all files are present** in the cursor_website folder
4. **Use a local web server** for better compatibility

## Next Steps

1. **Add your actual music files** to replace the placeholders
2. **Update contact information** with your real details
3. **Add social media links** to your actual accounts
4. **Customize colors and styling** to match your preferences
5. **Add more pages** if needed (tour dates, merchandise, etc.)

---

**Enjoy your new Ocelot Trio website!** 🎵 