# New Stylish-Readme Widgets Documentation

This document describes all the newly added widgets to the Stylish-Readme project. Each widget can be embedded in your README.md as an SVG badge.

## Table of Contents
1. [Expanded Quote Collection](#expanded-quote-collection)
2. [Editable Marker Board](#editable-marker-board)
3. [GitHub Contributions Badge](#github-contributions-badge)
4. [GitHub Streak Badge (Enhanced)](#github-streak-badge-enhanced)
5. [Project Stats Dashboard](#project-stats-dashboard)
6. [Contributors Badge](#contributors-badge)
7. [Social Links Panel](#social-links-panel)
8. [Tech Stack Widget](#tech-stack-widget)
9. [Project Version Badge](#project-version-badge)
10. [Activity Feed Widget](#activity-feed-widget)

---

## Expanded Quote Collection

**Widget Type:** `quote`

The quote widget now includes 6 categories with 100+ total quotes covering programming, motivation, wisdom, productivity, humor, creativity, and leadership.

### Available Categories
- `programming` - Developer and code-related quotes
- `motivation` - Inspirational and motivational quotes
- `wisdom` - Philosophical and wisdom quotes
- `productivity` - Productivity and action-focused quotes
- `humor` - Tech and programming humor
- `creativity` - Creative thinking quotes
- `leadership` - Leadership and management quotes
- `random` - Random selection from all categories

### Usage
```markdown
![Quote](https://stylish-readme.vercel.app/api/widget?type=quote&theme=classic&quoteCategory=programming)
```

### Parameters
- `quoteCategory` - Quote category (default: random)
- `theme` - Theme color (classic, paper, terminal, retro, ocean, crimson, forest, ink)
- `label` - Custom label text
- `bgColor` - Background color (hex)
- `borderColor` - Border color (hex)
- `radius` - Border radius (default: 8)
- `shadow` - Add shadow effect (true/false)

---

## Editable Marker Board

**Widget Type:** `marker`

The marker widget now supports custom text input through URL parameters, allowing users to create personalized thought-of-the-day or motivational message displays.

### Usage
```markdown
![Marker](https://stylish-readme.vercel.app/api/widget?type=marker&customText=Your%20Custom%20Message&markerColor=purple)
```

### Parameters
- `customText` - Your custom message (URL encoded)
- `markerColor` - Color theme (purple, blue, green, red, yellow)
- `markerStyle` - Layout style (banner, card)
- `theme` - Theme (classic, paper, terminal, etc.)
- `label` - Title label
- `name` - Name for card layout
- `bio` - Bio/description text
- `avatar` - Avatar URL
- `shadow` - Add shadow effect

### Example
```markdown
![My Daily Message](https://stylish-readme.vercel.app/api/widget?type=marker&customText=Keep%20Learning%20Every%20Day&markerColor=blue&markerStyle=banner)
```

---

## GitHub Contributions Badge

**Widget Type:** `contributions`

Display a colorful contribution activity heatmap for your GitHub profile.

### Usage
```markdown
![GitHub Contributions](https://stylish-readme.vercel.app/api/widget?type=contributions&username=your-username&theme=classic)
```

### Parameters
- `username` - GitHub username (default: github-user)
- `theme` - Theme color
- `label` - Custom label text
- `bgColor` - Background color
- `borderColor` - Border color
- `radius` - Border radius
- `shadow` - Shadow effect

### Features
- Color-coded contribution squares (light to dark)
- Weekly view of activity
- Customizable colors and themes
- Animated tooltip ready

---

## GitHub Streak Badge (Enhanced)

**Widget Type:** `streak-enhanced`

Enhanced streak badge with smooth animations and multiple streak tracking options.

### Usage
```markdown
![GitHub Streak](https://stylish-readme.vercel.app/api/widget?type=streak-enhanced&streak=45&bestStreak=120&theme=classic)
```

### Parameters
- `streak` - Current streak count
- `bestStreak` - Best/longest streak count
- `theme` - Theme color
- `label` - Custom label
- `bgColor` - Background color
- `fireColor` - Flame emoji color
- `shadow` - Shadow effect

### Features
- Animated flame emoji with flicker effect
- Current and best streak display
- Smooth animations
- Customizable colors

---

## Project Stats Dashboard

**Widget Type:** `stats`

Display key project statistics in a dashboard layout.

### Usage
```markdown
![Project Stats](https://stylish-readme.vercel.app/api/widget?type=stats&username=your-username&stars=2.5K&forks=450&issues=12&prs=8)
```

### Parameters
- `username` - GitHub username
- `stars` - Star count display
- `forks` - Fork count display
- `issues` - Open issues count
- `prs` - Pull requests count
- `theme` - Theme color
- `label` - Custom label
- `shadow` - Shadow effect

### Features
- Four main statistics display
- Icon indicators for each metric
- Compact horizontal layout
- Real-time data ready

---

## Contributors Badge

**Widget Type:** `contributors`

Show your top project contributors with avatars and names.

### Usage
```markdown
![Contributors](https://stylish-readme.vercel.app/api/widget?type=contributors&count=5&layout=grid&avatarSize=32)
```

### Parameters
- `count` - Number of contributors to display (default: 5)
- `layout` - Layout style (grid, compact, list)
- `avatarSize` - Avatar size in pixels (default: 32)
- `theme` - Theme color
- `label` - Custom label
- `shadow` - Shadow effect

### Features
- Colorful avatar placeholders
- Multiple layout options
- Customizable avatar sizes
- Easy integration with GitHub API

---

## Social Links Panel

**Widget Type:** `social`

Create a social media links display panel with icons.

### Usage
```markdown
![Connect With Me](https://stylish-readme.vercel.app/api/widget?type=social&twitter=true&github=true&linkedin=true&portfolio=true&youtube=true)
```

### Parameters
- `twitter` - Show Twitter/X link (true/false)
- `github` - Show GitHub link (true/false)
- `linkedin` - Show LinkedIn link (true/false)
- `portfolio` - Show portfolio link (true/false)
- `email` - Show email link (true/false)
- `youtube` - Show YouTube link (true/false)
- `theme` - Theme color
- `label` - Custom label

### Features
- Multiple social platform support
- Customizable platform selection
- Clean icon display
- Easy link integration

---

## Tech Stack Widget

**Widget Type:** `techstack`

Display your technology stack with organized categories and logos.

### Usage
```markdown
![Tech Stack](https://stylish-readme.vercel.app/api/widget?type=techstack&techs=JavaScript,React,Node.js,MongoDB,Docker,TypeScript,Python,SQL)
```

### Parameters
- `techs` - Comma-separated list of technologies
- `theme` - Theme color
- `label` - Custom label
- `bgColor` - Background color
- `shadow` - Shadow effect

### Supported Technologies
- JavaScript, TypeScript, Python, Go, Rust
- React, Vue, Angular, Svelte
- Node.js, Django, FastAPI, Express
- MongoDB, PostgreSQL, MySQL, Redis
- Docker, Kubernetes, AWS, GCP
- And many more with auto-emoji mapping

### Features
- Auto emoji assignment per technology
- Grid layout (up to 8 techs)
- Customizable colors
- Version display ready

---

## Project Version Badge

**Widget Type:** `version`

Display your project version with release information.

### Usage
```markdown
![Version](https://stylish-readme.vercel.app/api/widget?type=version&version=v1.2.3&releaseDate=2024-01-15&status=stable)
```

### Parameters
- `version` - Version number (default: v1.0.0)
- `releaseDate` - Release date (YYYY-MM-DD format)
- `status` - Release status (stable, beta, alpha)
- `theme` - Theme color
- `label` - Custom label
- `shadow` - Shadow effect

### Status Colors
- `stable` - Green (#10b981)
- `beta` - Orange (#f59e0b)
- `alpha` - Red (#ef4444)

### Features
- Clear version display
- Status indicator with colors
- Release date tracking
- Semantic versioning support

---

## Activity Feed Widget

**Widget Type:** `activity`

Show recent project activity in a timeline format.

### Usage
```markdown
![Recent Activity](https://stylish-readme.vercel.app/api/widget?type=activity&theme=classic)
```

### Parameters
- `theme` - Theme color
- `label` - Custom label text
- `bgColor` - Background color
- `shadow` - Shadow effect

### Features
- Timeline visualization
- Multiple activity types
- Icon indicators
- Time-ago display
- Connected activity flow

### Activity Types Shown
- Release publications
- Pull request merges
- Commits pushed
- Star milestones

---

## Common Parameters

All widgets support these common parameters:

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| `theme` | classic, paper, terminal, retro, ocean, crimson, forest, ink | classic | Color theme |
| `bgColor` | Hex color (#RRGGBB) | Theme default | Background color |
| `borderColor` | Hex color (#RRGGBB) | Theme default | Border color |
| `radius` | 0-20 | 8 | Border radius in px |
| `shadow` | true, false | false | Add shadow effect |
| `label` | Any text | Widget default | Custom label text |

## Theme Colors

Each theme provides coordinated colors for backgrounds and text:

- **classic** - Dark background with light text
- **paper** - Light background with dark text
- **terminal** - Code terminal style (dark green)
- **retro** - Retro 80s style (yellow/black)
- **ocean** - Ocean blue theme
- **crimson** - Deep red theme
- **forest** - Dark green theme
- **ink** - Minimalist ink style

---

## Integration Tips

1. **Add to README.md** - Simply copy any widget URL into your README
2. **Customize** - Adjust theme, colors, and label parameters
3. **Link** - Wrap in `<a>` tags to link to relevant pages
4. **Combine** - Mix multiple widgets for a comprehensive profile

### Example README Section
```markdown
## 📊 My Profile

![GitHub Contributions](https://stylish-readme.vercel.app/api/widget?type=contributions&username=yourname&theme=classic)

![GitHub Streak](https://stylish-readme.vercel.app/api/widget?type=streak-enhanced&streak=45&theme=classic)

### 💻 Tech Stack
![Tech Stack](https://stylish-readme.vercel.app/api/widget?type=techstack&techs=JavaScript,React,Node.js,MongoDB)

### 📈 Stats
![Stats](https://stylish-readme.vercel.app/api/widget?type=stats&username=yourname&stars=2.5K)

### 🔗 Connect
![Social](https://stylish-readme.vercel.app/api/widget?type=social&twitter=true&github=true&linkedin=true)
```

---

## Troubleshooting

### Widget not displaying
- Check URL encoding (spaces should be %20)
- Verify theme name is correct
- Ensure color values are valid hex codes

### Colors not showing
- Use valid hex colors (e.g., #FF5733)
- Omit # symbol is also accepted (#FF5733 or FF5733)
- Check contrast with background

### API Rate Limits
- Caching is automatically applied (1 hour for most widgets)
- GitHub API-dependent widgets respect rate limits
- Stale content is served if refresh fails

---

## Future Enhancements

Planned improvements for these widgets:

- [ ] YouTube video preview with auto-thumbnail fetch
- [ ] Browser extension marketplace badges (Chrome, Edge, Firefox)
- [ ] Real GitHub API integration for contributions
- [ ] Live activity feed from GitHub events
- [ ] Custom quote dataset support
- [ ] Analytics and tracking options

---

For issues or feature requests, please visit the [GitHub Issues](https://github.com/cu-sanjay/Stylish-Readme/issues) page.
