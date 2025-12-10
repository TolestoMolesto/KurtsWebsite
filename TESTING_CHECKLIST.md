# Testing & Validation Checklist

## Pre-Testing Setup
- [ ] Run `npm run dev` 
- [ ] App loads successfully
- [ ] No console errors
- [ ] No TypeScript errors

---

## Layout & Structure Tests

### Desktop (1200px+)
- [ ] Header fixed at top, doesn't block content
- [ ] Footer visible at bottom
- [ ] Mobile nav (bottom bar) is hidden
- [ ] Content scrolls freely
- [ ] No white space or gaps
- [ ] All tabs accessible from header

### Mobile (< 768px)
- [ ] Header fixed at top, doesn't block content
- [ ] Footer is hidden
- [ ] Bottom nav bar visible and fixed
- [ ] Content scrolls above bottom nav
- [ ] Safe space below content for bottom nav
- [ ] No overlapping elements

### Tablet (768px - 1024px)
- [ ] Layout adapts between mobile and desktop
- [ ] Header properly sized
- [ ] Bottom nav visible on smaller tablets
- [ ] Content readable and accessible

---

## Responsive Design Tests

### Device Emulation (Chrome DevTools)
Test each device in DevTools:
- [ ] iPhone SE (375px)
- [ ] iPhone 12 (390px) - with notch
- [ ] iPhone Pro Max (428px)
- [ ] Pixel 5 (393px)
- [ ] iPad (768px)
- [ ] iPad Pro (1024px)
- [ ] Desktop (1920px)

### Orientation Tests
- [ ] Portrait orientation works
- [ ] Landscape orientation works
- [ ] Layout changes smoothly on rotation
- [ ] No content overflow

### Safe Area Tests (Notched Devices)
- [ ] iPhone 12/13 notch doesn't block content
- [ ] Android notch doesn't block content
- [ ] Bottom nav respects safe area
- [ ] Status bar shows correctly

---

## Responsive Hooks Tests

### Test useIsMobile()
```tsx
import { useIsMobile } from './services/responsiveDesign';

// Add to a component for testing:
const isMobile = useIsMobile();
console.log('Is Mobile:', isMobile);
```
- [ ] Returns true on mobile (<768px)
- [ ] Returns false on desktop (≥768px)
- [ ] Updates when resizing window

### Test useBreakpoint()
```tsx
import { useBreakpoint } from './services/responsiveDesign';

const bp = useBreakpoint();
console.log('Breakpoint:', bp);
```
- [ ] xs: < 640px
- [ ] sm: 640-767px
- [ ] md: 768-1023px
- [ ] lg: 1024-1279px
- [ ] xl: 1280-1535px
- [ ] 2xl: 1536px+

### Test useOrientation()
```tsx
import { useOrientation } from './services/responsiveDesign';

const orientation = useOrientation();
console.log('Orientation:', orientation);
```
- [ ] Returns 'portrait' in portrait mode
- [ ] Returns 'landscape' in landscape mode
- [ ] Updates on device rotation

---

## Performance Tests

### Code Splitting
- [ ] Initial page loads (50-60KB gzipped)
- [ ] Network tab shows separate chunks
- [ ] Clicking nav button loads new chunk
- [ ] Chunk files are reasonable sizes

### Loading Skeleton
- [ ] Navigate to Builder view (larger chunk)
- [ ] See loading skeleton appear
- [ ] Skeleton disappears when view loads
- [ ] Smooth fade-in transition

### Performance Metrics (Console)
```bash
npm run dev
# Open Console tab (F12)
# Should see metrics like:
```
- [ ] Page Load Time logged
- [ ] FCP (First Contentful Paint) logged
- [ ] LCP (Largest Contentful Paint) logged
- [ ] DOM Interactive time logged
- [ ] No warnings or errors

### Check Bundle Sizes
```bash
npm run build
ls -lh dist/assets/*.js
```
- [ ] react-vendor: < 15KB gzipped
- [ ] ui-vendor: < 10KB gzipped
- [ ] index: < 70KB gzipped
- [ ] Other chunks: < 50KB each

---

## Navigation Tests

### Header Navigation (Desktop)
- [ ] Gods button works
- [ ] Builder button works
- [ ] Items button works
- [ ] Tier List button works
- [ ] Tournament button works
- [ ] Guides button works
- [ ] Active nav item highlighted
- [ ] All tabs accessible

### Mobile Bottom Nav
- [ ] Home button works
- [ ] Gods button works
- [ ] Builder button works
- [ ] Items button works
- [ ] Tier List button works
- [ ] Guides button works
- [ ] Active button highlighted in gold
- [ ] Indicator line shows active
- [ ] All 6 items fit on screen

### Logo/Home Navigation
- [ ] Desktop: Click logo → Home
- [ ] Mobile: Click logo → Home (if visible)
- [ ] Smooth navigation

---

## Content Tests

### Home View
- [ ] Loads without overlap
- [ ] Content visible without scrolling unnecessarily
- [ ] All sections present
- [ ] Images load correctly

### Gods View
- [ ] Gods list displays
- [ ] Can scroll through gods
- [ ] Details visible on click
- [ ] No content blocked by header

### Builder View
- [ ] Loads (might be slower - large chunk)
- [ ] God selection works
- [ ] Stats update
- [ ] Abilities display
- [ ] Items selection works
- [ ] Calculations correct

### Items View
- [ ] Items list displays
- [ ] Search/filter works
- [ ] Item details visible
- [ ] Stats shown correctly

### Tier List View
- [ ] Tier list displays
- [ ] Streamers show up
- [ ] Content not blocked

### Tournament View
- [ ] Loads correctly
- [ ] Tournament info displays
- [ ] No layout issues

### Guides View
- [ ] Loads correctly
- [ ] Guides display
- [ ] Content readable

---

## Search & Filter Tests
- [ ] Search inputs work on mobile
- [ ] Filter buttons are tappable
- [ ] Results update correctly
- [ ] No keyboard overlap on mobile

---

## Authentication Tests
- [ ] Sign In button visible
- [ ] Sign In modal opens
- [ ] Can type in inputs on mobile
- [ ] Form submits correctly
- [ ] Profile view works when logged in

---

## Accessibility Tests
- [ ] Tab navigation works
- [ ] Focus visible on buttons
- [ ] Touch targets 44px+ on mobile
- [ ] Text readable (high contrast)
- [ ] No color-only indicators

---

## Browser Tests

### Chrome
- [ ] Desktop version: ✓
- [ ] Mobile version: ✓
- [ ] DevTools responsive mode: ✓

### Firefox
- [ ] Desktop version: ✓
- [ ] Mobile view: ✓

### Safari
- [ ] Desktop version: ✓
- [ ] Mobile (iOS): ✓ (if available)

### Edge
- [ ] Desktop version: ✓

---

## Build Tests

### Development Build
```bash
npm run dev
```
- [ ] Starts without errors
- [ ] Hot reload works
- [ ] Console shows performance metrics
- [ ] No TypeScript errors

### Production Build
```bash
npm run build
```
- [ ] Completes successfully
- [ ] No build errors
- [ ] dist/ folder created
- [ ] Files are reasonable sizes

### Preview Build
```bash
npm run preview
```
- [ ] Serves production build
- [ ] All features work
- [ ] Performance acceptable

---

## Network Tests

### Slow Network Simulation (Chrome DevTools)
1. Open DevTools → Network
2. Set throttling to "Slow 3G"
3. Reload page
- [ ] Page eventually loads
- [ ] Loading skeleton shows
- [ ] No timeout errors
- [ ] Acceptable UX

### Offline Tests
1. Open DevTools → Network
2. Check "Offline"
3. Reload page
- [ ] Shows appropriate error/message
- [ ] Doesn't crash

---

## Memory & Performance Tests

### Check Memory Usage
1. DevTools → Memory
2. Take heap snapshot
3. Navigate through views
4. Take another snapshot
- [ ] No major memory leaks
- [ ] Memory released when views change
- [ ] Reasonable memory footprint

### Check CPU Usage
1. DevTools → Performance
2. Record while navigating
3. Stop recording
- [ ] No long tasks (> 50ms)
- [ ] Smooth 60fps scrolling
- [ ] Quick view transitions

---

## Mobile-Specific Tests

### Touch Interaction
- [ ] Buttons respond to tap
- [ ] No double-tap zoom needed
- [ ] Scrolling smooth
- [ ] No lag on interaction

### Notch/Safe Area (Notched Phones)
- [ ] Bottom nav respects notch
- [ ] Header respects notch
- [ ] Status bar visible
- [ ] Content not hidden

### Input Fields
- [ ] Keyboard doesn't hide inputs
- [ ] Inputs focusable and readable
- [ ] Can type and submit
- [ ] Numbers pad for number inputs

### Viewport Meta Tags
1. Open View Source (mobile)
2. Check for:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
```
- [ ] Present and correct

---

## Image Tests
- [ ] Images load correctly
- [ ] Images are appropriately sized
- [ ] No blurry or pixelated images
- [ ] Lazy loading works (if implemented)

---

## Animation Tests
- [ ] Page transitions smooth
- [ ] No jank during animations
- [ ] Loading spinner animated
- [ ] Hover effects work (desktop)
- [ ] No animation on mobile if not needed

---

## Error Handling Tests
- [ ] Network error shows message
- [ ] Invalid input shows error
- [ ] Missing data shows fallback
- [ ] No uncaught errors in console

---

## Final Validation

### Desktop Summary
- Total tests: __/25
- Passed: __/25
- Failed: __
- Issues: __

### Mobile Summary
- Total tests: __/25
- Passed: __/25
- Failed: __
- Issues: __

### Overall Status
- [ ] All critical tests passed
- [ ] Minor issues documented
- [ ] Ready for deployment

---

## Known Issues (if any)
1. 
2. 
3. 

## Notes
- 
- 
- 

---

## Sign-Off
- Tested by: _______________
- Date: _______________
- Ready to deploy: [ ] Yes [ ] No
- Additional testing needed: [ ] Yes [ ] No

---

## Quick Links for Reference
- Performance doc: `PERFORMANCE_IMPROVEMENTS.md`
- Quick start: `QUICK_START.md`
- Implementation: `IMPLEMENTATION_SUMMARY.md`
- Main app: `App.tsx`
- Responsive utils: `services/responsiveDesign.ts`
- Performance utils: `services/performanceUtils.ts`
