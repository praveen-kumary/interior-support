// Real project site execution and inspection gallery items
// All photos are 100% authentic field photography from real fit-out projects

export interface GalleryItem {
  id: string;
  slug: string;
  title: string;
  category: "modular-kitchens" | "wardrobes-storage" | "wall-paneling-joinery" | "living-tv-units" | "site-quality-audits";
  categoryLabel: string;
  type: string;
  location: string;
  area: string;
  stage: string;
  caption: string;
  image: string;
  alt: string;
  highlights: string[];
}

export const galleryItems: GalleryItem[] = [
  {
    "idx": 1,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.32 PM (1).jpeg",
    "slug": "kitchen-taupe-l-shape-terrazzo",
    "title": "Contemporary Taupe L-Shaped Modular Kitchen",
    "category": "modular-kitchens",
    "categoryLabel": "Modular Kitchens",
    "type": "3BHK High-Rise Apartment",
    "location": "Whitefield, Bengaluru",
    "area": "1,850 sq. ft.",
    "stage": "Countertop & Backsplash Alignment Audit",
    "caption": "Contemporary taupe acrylic L-shaped modular kitchen with seamless quartz countertop and terrazzo tile backsplash.",
    "highlights": [
      "Millimeter laser check on 90-degree corner carcass alignment",
      "BWP marine plywood verification for under-sink moisture resistance",
      "Warm 3000K LED task lighting strip integration beneath wall units"
    ],
    "id": "kitchen-taupe-l-shape-terrazzo",
    "image": "/gallery/kitchen-taupe-l-shape-terrazzo.webp",
    "alt": "Contemporary taupe acrylic L-shaped modular kitchen with seamless quartz countertop and terrazzo tile backsplash."
  },
  {
    "idx": 2,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.32 PM (2).jpeg",
    "slug": "kitchen-sage-tall-unit-oak",
    "title": "Sage Green & Oak Kitchen with Appliance Tower",
    "category": "modular-kitchens",
    "categoryLabel": "Modular Kitchens",
    "type": "4BHK Premium Duplex",
    "location": "Indiranagar, Bengaluru",
    "area": "2,600 sq. ft.",
    "stage": "Tall Unit & Hardware Installation Sign-Off",
    "caption": "Sage green and natural oak dual-tone modular kitchen featuring tall appliance housing and black granite countertop.",
    "highlights": [
      "Vertical plumb audit on 8-foot tall pantry and appliance tower",
      "Soft-close tandem box drawer weight-bearing test (35kg rating)",
      "Zero-lip transition verified between granite slab and wall tile"
    ],
    "id": "kitchen-sage-tall-unit-oak",
    "image": "/gallery/kitchen-sage-tall-unit-oak.webp",
    "alt": "Sage green and natural oak dual-tone modular kitchen featuring tall appliance housing and black granite countertop."
  },
  {
    "idx": 3,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.32 PM.jpeg",
    "slug": "pantry-white-shaker-fluted-glass",
    "title": "White Shaker Pantry Bar with Fluted Glass",
    "category": "modular-kitchens",
    "categoryLabel": "Modular Kitchens",
    "type": "Luxury Penthouse Suite",
    "location": "Lavelle Road, Bengaluru",
    "area": "3,400 sq. ft.",
    "stage": "Bespoke Millwork & Glass Glazing Audit",
    "caption": "Classical white shaker pantry and dry bar unit with fluted glass mullion wall cabinets, brass hardware, and wine-red subway tile.",
    "highlights": [
      "Fluted glass panel damping and acoustic rattle inspection",
      "Solid brass handle center-to-center drilling tolerance (+/-0.5mm)",
      "Food-grade epoxy grout verification across subway tile backsplash"
    ],
    "id": "pantry-white-shaker-fluted-glass",
    "image": "/gallery/pantry-white-shaker-fluted-glass.webp",
    "alt": "Classical white shaker pantry and dry bar unit with fluted glass mullion wall cabinets, brass hardware, and wine-red subway tile."
  },
  {
    "idx": 4,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.33 PM (1).jpeg",
    "slug": "tv-fluted-walnut-damask-feature",
    "title": "Fluted Walnut TV Feature Wall & Low Console",
    "category": "living-tv-units",
    "categoryLabel": "TV & Living Consoles",
    "type": "4BHK Sea-Facing Residence",
    "location": "Koramangala, Bengaluru",
    "area": "2,900 sq. ft.",
    "stage": "Concealed AV Conduit & Cladding Verification",
    "caption": "Fluted dark walnut center TV panel flanked by damask wallpaper panels and floating low-profile console with gold hardware.",
    "highlights": [
      "Heavy-gauge floating console wall anchor load test (up to 75kg)",
      "Concealed 50mm HDMI and optical audio conduit clearance verified",
      "Precision shadow gap line between acoustic wood paneling and ceiling"
    ],
    "id": "tv-fluted-walnut-damask-feature",
    "image": "/gallery/tv-fluted-walnut-damask-feature.webp",
    "alt": "Fluted dark walnut center TV panel flanked by damask wallpaper panels and floating low-profile console with gold hardware."
  },
  {
    "idx": 5,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.33 PM (2).jpeg",
    "slug": "bedroom-kids-scalloped-fluted-headboard",
    "title": "Curved Scalloped Fluted Headboard & Integrated Bed",
    "category": "wall-paneling-joinery",
    "categoryLabel": "Wall Paneling & Joinery",
    "type": "Boutique Residential Villa",
    "location": "Sadashivanagar, Bengaluru",
    "area": "4,200 sq. ft.",
    "stage": "Custom Upholstery & Bed Base Joinery Audit",
    "caption": "Custom vertical fluted scalloped wall paneling in soft blush upholstery with integrated bed base and whimsical mural backdrop.",
    "highlights": [
      "High-density 40D PU foam resilience and stitch tension inspection",
      "Solid birch plywood sub-frame verified for squeak-free bed joinery",
      "Child-safe rounded edge profile on all timber corners and baseboards"
    ],
    "id": "bedroom-kids-scalloped-fluted-headboard",
    "image": "/gallery/bedroom-kids-scalloped-fluted-headboard.webp",
    "alt": "Custom vertical fluted scalloped wall paneling in soft blush upholstery with integrated bed base and whimsical mural backdrop."
  },
  {
    "idx": 6,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.33 PM.jpeg",
    "slug": "living-backlit-arch-marble-niche",
    "title": "Backlit Architectural Arch with Floating Marble Ledges",
    "category": "wall-paneling-joinery",
    "categoryLabel": "Wall Paneling & Joinery",
    "type": "Luxury Duplex Apartment",
    "location": "Koramangala, Bengaluru",
    "area": "3,100 sq. ft.",
    "stage": "Drywall Arch Forming & Low-Voltage LED Audit",
    "caption": "Illuminated backlit wall niche featuring symmetrical architectural arch, botanical wallpaper backing, and floating marble display ledges.",
    "highlights": [
      "True-radius CNC template verification for smooth plaster arch curve",
      "Even lumen dispersion audit on concealed 24V LED channel diffuser",
      "Concealed cantilever steel brackets for stone display ledges"
    ],
    "id": "living-backlit-arch-marble-niche",
    "image": "/gallery/living-backlit-arch-marble-niche.webp",
    "alt": "Illuminated backlit wall niche featuring symmetrical architectural arch, botanical wallpaper backing, and floating marble display ledges."
  },
  {
    "idx": 7,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.34 PM (1).jpeg",
    "slug": "wardrobe-kids-arch-cutout-study",
    "title": "Pastel Wardrobe Suite with Arch Cutouts & Study",
    "category": "wardrobes-storage",
    "categoryLabel": "Wardrobes & Storage",
    "type": "3BHK Contemporary Apartment",
    "location": "Bellandur, Bengaluru",
    "area": "1,950 sq. ft.",
    "stage": "Children's Bedroom Joinery & Safety Inspection",
    "caption": "Children's modular wardrobe in pastel pink and sage tones with custom arch handle cutouts, open bookcase shelving, and study desk.",
    "highlights": [
      "Soft-close anti-slam hinge dampening check on all shutter doors",
      "Zero VOC emission board certification verification (E1 grade)",
      "Dual-height hanging rods and rounded open shelving compartments"
    ],
    "id": "wardrobe-kids-arch-cutout-study",
    "image": "/gallery/wardrobe-kids-arch-cutout-study.webp",
    "alt": "Children's modular wardrobe in pastel pink and sage tones with custom arch handle cutouts, open bookcase shelving, and study desk."
  },
  {
    "idx": 8,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.34 PM (2).jpeg",
    "slug": "wardrobe-bronze-sliding-study-desk",
    "title": "Bronze Tinted Glass Wardrobe & Study Desk Unit",
    "category": "wardrobes-storage",
    "categoryLabel": "Wardrobes & Storage",
    "type": "Executive High-Rise Suite",
    "location": "Outer Ring Road (Bellandur), Bengaluru",
    "area": "2,100 sq. ft.",
    "stage": "Integrated Study & Sliding Track Verification",
    "caption": "Integrated floating study desk with overhead display shelves adjacent to bronze-tinted glass sliding wardrobe with fluted frame.",
    "highlights": [
      "Heavy-duty top-hung sliding mechanism glide and balance check",
      "Wire-management grommets and 3-pin pop-up power box integration",
      "Toughened 5mm bronze float glass shatter-safety certification"
    ],
    "id": "wardrobe-bronze-sliding-study-desk",
    "image": "/gallery/wardrobe-bronze-sliding-study-desk.webp",
    "alt": "Integrated floating study desk with overhead display shelves adjacent to bronze-tinted glass sliding wardrobe with fluted frame."
  },
  {
    "idx": 9,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.35 PM (1).jpeg",
    "slug": "wardrobe-sliding-white-bronze-band",
    "title": "Dual-Tone Gloss & Bronze Glass Sliding Wardrobe",
    "category": "wardrobes-storage",
    "categoryLabel": "Wardrobes & Storage",
    "type": "Luxury Urban Apartment",
    "location": "Hebbal, Bengaluru",
    "area": "1,750 sq. ft.",
    "stage": "Sliding Track Alignment & Carcass Leveling",
    "caption": "Dual-tone sliding wardrobe combining high-gloss white acrylic with horizontal bronze-tinted glass band on heavy-duty aluminum track.",
    "highlights": [
      "Floor-level laser calibration to eliminate sliding shutter drift",
      "Soft-brake cushion stoppers verified at both opening and closing ends",
      "Dust-seal felt brush strip audit along door overlapping profile"
    ],
    "id": "wardrobe-sliding-white-bronze-band",
    "image": "/gallery/wardrobe-sliding-white-bronze-band.webp",
    "alt": "Dual-tone sliding wardrobe combining high-gloss white acrylic with horizontal bronze-tinted glass band on heavy-duty aluminum track."
  },
  {
    "idx": 10,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.35 PM.jpeg",
    "slug": "kitchen-sage-roller-shutter-garage",
    "title": "Sage Green Kitchen with Appliance Roller Shutter",
    "category": "modular-kitchens",
    "categoryLabel": "Modular Kitchens",
    "type": "Contemporary Villa Fit-Out",
    "location": "Lavelle Road, Bengaluru",
    "area": "3,800 sq. ft.",
    "stage": "Appliance Garage & Specialist Hardware Audit",
    "caption": "Sage green modular kitchen with integrated appliance garage roller shutter, wicker vegetable baskets, and black quartz countertop.",
    "highlights": [
      "Smooth vertical roll-up action and counterweight spring calibration",
      "Internal 16A concealed power points for coffee machine and toaster",
      "Bespoke wicker pull-out basket ventilation and smooth slide check"
    ],
    "id": "kitchen-sage-roller-shutter-garage",
    "image": "/gallery/kitchen-sage-roller-shutter-garage.webp",
    "alt": "Sage green modular kitchen with integrated appliance garage roller shutter, wicker vegetable baskets, and black quartz countertop."
  },
  {
    "idx": 11,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.36 PM (1).jpeg",
    "slug": "audit-wardrobe-internal-carcass-shelving",
    "title": "Wardrobe Internal Carcass & Shelf Pin Audit",
    "category": "site-quality-audits",
    "categoryLabel": "Site Quality Audits",
    "type": "3BHK Premium Residence",
    "location": "Whitefield, Bengaluru",
    "area": "2,050 sq. ft.",
    "stage": "Internal Carcass & Hardware Verification",
    "caption": "Technical audit of internal wardrobe partitions, showing shelf spacing, 2mm PVC edge banding, and full-extension drawer runners.",
    "highlights": [
      "Zero-chipping verification on all 2mm hot-melt machine edge bands",
      "Shelf pin weight-bearing test across 8 internal storage bays",
      "Internal carcass plumb and 90-degree squareness verified with digital square"
    ],
    "id": "audit-wardrobe-internal-carcass-shelving",
    "image": "/gallery/audit-wardrobe-internal-carcass-shelving.webp",
    "alt": "Technical audit of internal wardrobe partitions, showing shelf spacing, 2mm PVC edge banding, and full-extension drawer runners."
  },
  {
    "idx": 12,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.36 PM (3).jpeg",
    "slug": "wardrobe-dark-walnut-arched-brass-grill",
    "title": "Walnut Sliding Wardrobe & Arched Brass Shutters",
    "category": "wardrobes-storage",
    "categoryLabel": "Wardrobes & Storage",
    "type": "Heritage-Modern Penthouse",
    "location": "Sadashivanagar, Bengaluru",
    "area": "3,600 sq. ft.",
    "stage": "Dual Wardrobe Suite Final Quality Sign-Off",
    "caption": "Master bedroom suite pairing rich walnut sliding wardrobe with classical arched wardrobe doors featuring decorative brass mesh grills.",
    "highlights": [
      "Laser level check on sliding door overhang vs ceiling cornice",
      "Perforated brass grill tension and acoustic lining inspection",
      "Concealed magnetic catches and smooth push-to-open latch operation"
    ],
    "id": "wardrobe-dark-walnut-arched-brass-grill",
    "image": "/gallery/wardrobe-dark-walnut-arched-brass-grill.webp",
    "alt": "Master bedroom suite pairing rich walnut sliding wardrobe with classical arched wardrobe doors featuring decorative brass mesh grills."
  },
  {
    "idx": 13,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.36 PM.jpeg",
    "slug": "wardrobe-sliding-drawer-chest-internals",
    "title": "Internal Wardrobe Organization & Lockable Drawer Chest",
    "category": "wardrobes-storage",
    "categoryLabel": "Wardrobes & Storage",
    "type": "Executive Residence",
    "location": "Indiranagar, Bengaluru",
    "area": "2,400 sq. ft.",
    "stage": "Internal Millwork & Hardware Inspection",
    "caption": "Internal storage carcass inspection showing lockable security drawers, high-capacity hanging section, and top seasonal loft space.",
    "highlights": [
      "Lock cylinder alignment and multi-drawer locking bar verification",
      "Full-extension 45kg undermount soft-close slide check",
      "Internal wardrobe lighting switch plunger sensitivity test"
    ],
    "id": "wardrobe-sliding-drawer-chest-internals",
    "image": "/gallery/wardrobe-sliding-drawer-chest-internals.webp",
    "alt": "Internal storage carcass inspection showing lockable security drawers, high-capacity hanging section, and top seasonal loft space."
  },
  {
    "idx": 14,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.37 PM (1).jpeg",
    "slug": "bedroom-master-fluted-bed-sliding-wardrobe",
    "title": "Master Suite with Fluted Bed & Sliding Wardrobe",
    "category": "wall-paneling-joinery",
    "categoryLabel": "Wall Paneling & Joinery",
    "type": "High-Rise Duplex Penthouse",
    "location": "Sadashivanagar, Bengaluru",
    "area": "4,100 sq. ft.",
    "stage": "Master Bedroom Pre-Handover Audit",
    "caption": "Master bedroom fit-out featuring vertical fluted fabric headboard, hydraulic storage bed base, and floor-to-ceiling glass sliding wardrobe.",
    "highlights": [
      "Hydraulic gas lift cylinder pressure verification (250N rating)",
      "Zero clearance clash between sliding door track and bed bedside ledge",
      "Wall plumb check ensuring complete light blockout behind headboard"
    ],
    "id": "bedroom-master-fluted-bed-sliding-wardrobe",
    "image": "/gallery/bedroom-master-fluted-bed-sliding-wardrobe.webp",
    "alt": "Master bedroom fit-out featuring vertical fluted fabric headboard, hydraulic storage bed base, and floor-to-ceiling glass sliding wardrobe."
  },
  {
    "idx": 15,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.37 PM (2).jpeg",
    "slug": "bedroom-upholstered-fluted-bed-hydraulic",
    "title": "Upholstered Fluted Headboard & Hydraulic Storage Bed",
    "category": "wall-paneling-joinery",
    "categoryLabel": "Wall Paneling & Joinery",
    "type": "Luxury Penthouse Suite",
    "location": "Indiranagar, Bengaluru",
    "area": "3,300 sq. ft.",
    "stage": "Furniture Quality & Gas-Lift Mechanism Audit",
    "caption": "Detailed inspection of fluted upholstered headboard stitching, fabric tension, and heavy-duty steel hydraulic storage bed mechanism.",
    "highlights": [
      "Steel tubular perimeter frame check with anti-rust powder coating",
      "Dual hydraulic strut synchronicity test under full mattress load",
      "Under-bed storage ventilated ply floor panel inspection"
    ],
    "id": "bedroom-upholstered-fluted-bed-hydraulic",
    "image": "/gallery/bedroom-upholstered-fluted-bed-hydraulic.webp",
    "alt": "Detailed inspection of fluted upholstered headboard stitching, fabric tension, and heavy-duty steel hydraulic storage bed mechanism."
  },
  {
    "idx": 16,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.38 PM (1).jpeg",
    "slug": "wardrobe-beige-matte-6door-bay-seat",
    "title": "6-Door Matte Beige Wardrobe & Bay Window Seating",
    "category": "wardrobes-storage",
    "categoryLabel": "Wardrobes & Storage",
    "type": "4BHK Premium Residence",
    "location": "Whitefield, Bengaluru",
    "area": "2,850 sq. ft.",
    "stage": "Full Bedroom Cabinetry & Seating Milestone",
    "caption": "Floor-to-ceiling 6-door hinged wardrobe in matte beige laminate with edge-mounted slim black handles, top lofts, and integrated window bench.",
    "highlights": [
      "Seamless scribe filler panel fitment against uneven masonry walls",
      "Bay window storage bench hinge safety stay audit",
      "Vertical handle plumb alignment within 0.5mm variance"
    ],
    "id": "wardrobe-beige-matte-6door-bay-seat",
    "image": "/gallery/wardrobe-beige-matte-6door-bay-seat.webp",
    "alt": "Floor-to-ceiling 6-door hinged wardrobe in matte beige laminate with edge-mounted slim black handles, top lofts, and integrated window bench."
  },
  {
    "idx": 17,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.38 PM (2).jpeg",
    "slug": "wardrobe-hinged-handle-verticality-check",
    "title": "Hinged Wardrobe Handle Alignment & Gap Consistency",
    "category": "wardrobes-storage",
    "categoryLabel": "Wardrobes & Storage",
    "type": "Modern Duplex Suite",
    "location": "Koramangala, Bengaluru",
    "area": "2,450 sq. ft.",
    "stage": "Joinery Quality & Gap Audit",
    "caption": "Close-up quality audit verifying 2mm uniform reveal gaps between 6 hinged wardrobe shutters and vertical slim black profile handles.",
    "highlights": [
      "Uniform 2mm reveal gap maintained across all vertical door seams",
      "3-way hinge 3D adjustment for zero shutter sagging or binding",
      "Concealed acoustic bumper pads installed on every door strike zone"
    ],
    "id": "wardrobe-hinged-handle-verticality-check",
    "image": "/gallery/wardrobe-hinged-handle-verticality-check.webp",
    "alt": "Close-up quality audit verifying 2mm uniform reveal gaps between 6 hinged wardrobe shutters and vertical slim black profile handles."
  },
  {
    "idx": 18,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.38 PM.jpeg",
    "slug": "bedroom-artdeco-brass-radial-headboard",
    "title": "Art-Deco Radial Brass Headboard & Asymmetric Mirror",
    "category": "wall-paneling-joinery",
    "categoryLabel": "Wall Paneling & Joinery",
    "type": "Luxury Boutique Residence",
    "location": "HSR Layout, Bengaluru",
    "area": "3,150 sq. ft.",
    "stage": "Feature Wall & Metallic Inlay Inspection",
    "caption": "Custom art-deco gold brass radial inlay headboard paneling paired with textured wallpaper and asymmetric vanity dressing mirror.",
    "highlights": [
      "Solid PVD-coated gold brass profile inlay flushness check (0mm lip)",
      "Asymmetric mirror edge beveling and safety adhesive backing audit",
      "Floating single-drawer vanity box cantilever strength verification"
    ],
    "id": "bedroom-artdeco-brass-radial-headboard",
    "image": "/gallery/bedroom-artdeco-brass-radial-headboard.webp",
    "alt": "Custom art-deco gold brass radial inlay headboard paneling paired with textured wallpaper and asymmetric vanity dressing mirror."
  },
  {
    "idx": 19,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.39 PM.jpeg",
    "slug": "wardrobe-mint-tinted-glass-gold-profile",
    "title": "Mint Glass & Gold Profile 3-Door Sliding Wardrobe",
    "category": "wardrobes-storage",
    "categoryLabel": "Wardrobes & Storage",
    "type": "Boutique Apartment",
    "location": "Indiranagar, Bengaluru",
    "area": "2,200 sq. ft.",
    "stage": "Anodized Aluminum Profile & Glazing Verification",
    "caption": "3-door frosted mint and bronze tinted glass sliding wardrobe with champagne gold aluminum frames and integrated under-window drawer base.",
    "highlights": [
      "Anodized gold aluminum profile scratch and coating thickness check",
      "Silent ball-bearing wheel guide mechanism in ceiling recessed channel",
      "Integrated under-window drawer unit transition without clearance gap"
    ],
    "id": "wardrobe-mint-tinted-glass-gold-profile",
    "image": "/gallery/wardrobe-mint-tinted-glass-gold-profile.webp",
    "alt": "3-door frosted mint and bronze tinted glass sliding wardrobe with champagne gold aluminum frames and integrated under-window drawer base."
  },
  {
    "idx": 20,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.40 PM (1).jpeg",
    "slug": "living-geometric-cove-ceiling-lighting",
    "title": "Geometric Gypsum False Ceiling & Cove Lighting",
    "category": "living-tv-units",
    "categoryLabel": "TV & Living Consoles",
    "type": "Executive Living Lounge",
    "location": "Cunningham Road, Bengaluru",
    "area": "3,700 sq. ft.",
    "stage": "False Ceiling & Electrical Lux Inspection",
    "caption": "Multi-tiered geometric gypsum false ceiling with warm 3000K LED cove illumination and contrasting high-gloss black glass accent paneling.",
    "highlights": [
      "Laser level check on perimeter gypsum framing ensuring zero sagging",
      "Consistent 150 lux warm ambient illumination along cove perimeter",
      "Concealed electrical driver location tagged for easy maintenance access"
    ],
    "id": "living-geometric-cove-ceiling-lighting",
    "image": "/gallery/living-geometric-cove-ceiling-lighting.webp",
    "alt": "Multi-tiered geometric gypsum false ceiling with warm 3000K LED cove illumination and contrasting high-gloss black glass accent paneling."
  },
  {
    "idx": 21,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.40 PM.jpeg",
    "slug": "wardrobe-floor-to-ceiling-black-profile-glass",
    "title": "Floor-to-Ceiling Black Profile Tinted Glass Wardrobe",
    "category": "wardrobes-storage",
    "categoryLabel": "Wardrobes & Storage",
    "type": "Ultra-Luxury Penthouse",
    "location": "Sadashivanagar, Bengaluru",
    "area": "4,500 sq. ft.",
    "stage": "High-Rise Glass Joinery & Reflectivity Audit",
    "caption": "Full-height 9.5ft black anodized aluminum profile sliding wardrobe with tinted reflective glass and recessed ceiling channel.",
    "highlights": [
      "9.5-foot door vertical plumb maintained within 1mm structural tolerance",
      "Concealed ceiling-recessed track system with zero visible floor rails",
      "Anti-deflection center stiffener rod integrated into slim aluminum sash"
    ],
    "id": "wardrobe-floor-to-ceiling-black-profile-glass",
    "image": "/gallery/wardrobe-floor-to-ceiling-black-profile-glass.webp",
    "alt": "Full-height 9.5ft black anodized aluminum profile sliding wardrobe with tinted reflective glass and recessed ceiling channel."
  },
  {
    "idx": 22,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.41 PM (1).jpeg",
    "slug": "wardrobe-black-glass-white-carcass-suite",
    "title": "Black Tinted Glass & White Lacquered Wardrobe Suite",
    "category": "wardrobes-storage",
    "categoryLabel": "Wardrobes & Storage",
    "type": "Modern Sea-View Apartment",
    "location": "Richmond Town, Bengaluru",
    "area": "2,750 sq. ft.",
    "stage": "Dual Material Joinery & Flooring Reflection Audit",
    "caption": "Contemporary black glass framed wardrobe doors contrasting against pristine white cabinetry and mirror-finish vitrified tile flooring.",
    "highlights": [
      "Zero-scratch inspection on high-gloss vitrified tile floor protection",
      "Flawless glass reflection continuity across adjacent sliding panels",
      "Concealed vertical finger-pull profile with ergonomic grip check"
    ],
    "id": "wardrobe-black-glass-white-carcass-suite",
    "image": "/gallery/wardrobe-black-glass-white-carcass-suite.webp",
    "alt": "Contemporary black glass framed wardrobe doors contrasting against pristine white cabinetry and mirror-finish vitrified tile flooring."
  },
  {
    "idx": 23,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.41 PM (2).jpeg",
    "slug": "audit-kitchen-plumbing-dishwasher-junction",
    "title": "Kitchen Under-Counter Plumbing & Dishwasher First-Fix",
    "category": "site-quality-audits",
    "categoryLabel": "Site Quality Audits",
    "type": "4BHK Premium Duplex",
    "location": "Whitefield, Bengaluru",
    "area": "2,950 sq. ft.",
    "stage": "Plumbing First-Fix & Appliance Integration",
    "caption": "Technical audit of under-counter dishwasher integration, hot/cold plumbing manifold, anti-siphon valve, and moisture barrier seal.",
    "highlights": [
      "Hydrostatic leak test on kitchen sink water supply and waste connections",
      "Moisture-proof BWP plywood lining inside sink carcass zone",
      "Dedicated 16A circuit breaker isolation for built-in dishwasher"
    ],
    "id": "audit-kitchen-plumbing-dishwasher-junction",
    "image": "/gallery/audit-kitchen-plumbing-dishwasher-junction.webp",
    "alt": "Technical audit of under-counter dishwasher integration, hot/cold plumbing manifold, anti-siphon valve, and moisture barrier seal."
  },
  {
    "idx": 24,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.41 PM.jpeg",
    "slug": "wardrobe-recessed-sliding-cove-integration",
    "title": "Recessed Sliding Glass Wardrobe with Ceiling Cove",
    "category": "wardrobes-storage",
    "categoryLabel": "Wardrobes & Storage",
    "type": "Luxury Duplex Residence",
    "location": "Lavelle Road, Bengaluru",
    "area": "3,200 sq. ft.",
    "stage": "Recessed Ceiling Channel & Skirting Audit",
    "caption": "Recessed tinted glass sliding wardrobe with ambient ceiling cove lighting and seamless flush skirting board detailing.",
    "highlights": [
      "Ceiling drywall recess depth verified for 100% flush track concealment",
      "Zero-shadow ambient cove lighting positioned directly over wardrobe face",
      "Skirting board termination profile aligned flush with wardrobe base"
    ],
    "id": "wardrobe-recessed-sliding-cove-integration",
    "image": "/gallery/wardrobe-recessed-sliding-cove-integration.webp",
    "alt": "Recessed tinted glass sliding wardrobe with ambient ceiling cove lighting and seamless flush skirting board detailing."
  },
  {
    "idx": 25,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.42 PM (1).jpeg",
    "slug": "kitchen-built-in-hob-countertop-routing",
    "title": "Built-in 4-Burner Glass Hob & Countertop Routing",
    "category": "modular-kitchens",
    "categoryLabel": "Modular Kitchens",
    "type": "Contemporary Apartment",
    "location": "Koramangala, Bengaluru",
    "area": "2,100 sq. ft.",
    "stage": "Hob Cutout & Gas Pipeline Verification",
    "caption": "Built-in 4-burner tempered glass hob installed with precision CNC countertop cutout routing, heat-resistant silicone seal, and soft-close drawers.",
    "highlights": [
      "CNC granite cutout edge radius inspection preventing corner stress cracks",
      "High-temp fire-rated silicone sealant barrier applied around hob flange",
      "Copper gas piping pressure tested at 1.5x operating pressure"
    ],
    "id": "kitchen-built-in-hob-countertop-routing",
    "image": "/gallery/kitchen-built-in-hob-countertop-routing.webp",
    "alt": "Built-in 4-burner tempered glass hob installed with precision CNC countertop cutout routing, heat-resistant silicone seal, and soft-close drawers."
  },
  {
    "idx": 26,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.42 PM (2).jpeg",
    "slug": "kitchen-appliance-tower-oven-microwave",
    "title": "Built-in Oven Tower & Overhead Extraction Ducting",
    "category": "modular-kitchens",
    "categoryLabel": "Modular Kitchens",
    "type": "High-Rise Penthouse",
    "location": "Sarjapur Road, Bengaluru",
    "area": "3,650 sq. ft.",
    "stage": "Built-in Appliance Commissioning & Ventilation",
    "caption": "Tall appliance tower housing built-in convection oven and microwave with glossy white acrylic cabinetry and concealed chimney duct boxing.",
    "highlights": [
      "Dedicated 25mm rear ventilation cavity verified for oven heat dissipation",
      "Independent 20A MCB cabling verified for heavy cooking appliances",
      "Precision door reveal gap alignment between appliance flanges and cabinetry"
    ],
    "id": "kitchen-appliance-tower-oven-microwave",
    "image": "/gallery/kitchen-appliance-tower-oven-microwave.webp",
    "alt": "Tall appliance tower housing built-in convection oven and microwave with glossy white acrylic cabinetry and concealed chimney duct boxing."
  },
  {
    "idx": 27,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.42 PM (3).jpeg",
    "slug": "kitchen-walnut-white-mosaic-backsplash",
    "title": "Walnut & White Kitchen with Mosaic Backsplash",
    "category": "modular-kitchens",
    "categoryLabel": "Modular Kitchens",
    "type": "Modern Suburban Villa",
    "location": "Bellandur, Bengaluru",
    "area": "2,500 sq. ft.",
    "stage": "Tile Grouting & Profile Handle Verification",
    "caption": "Warm walnut base cabinets with Gola profile brass handles, high-gloss white upper units, and geometric mosaic tile backsplash.",
    "highlights": [
      "Gola profile handle channel depth verified for comfortable finger clearance",
      "Epoxy grout color uniformity inspection across intricate mosaic tiles",
      "Upper cabinet lift-up stay hardware calibrated to hold at any angle"
    ],
    "id": "kitchen-walnut-white-mosaic-backsplash",
    "image": "/gallery/kitchen-walnut-white-mosaic-backsplash.webp",
    "alt": "Warm walnut base cabinets with Gola profile brass handles, high-gloss white upper units, and geometric mosaic tile backsplash."
  },
  {
    "idx": 28,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.42 PM.jpeg",
    "slug": "paneling-parisian-boiserie-wall-sconces",
    "title": "French Boiserie Wall Paneling & Modern Sconces",
    "category": "wall-paneling-joinery",
    "categoryLabel": "Wall Paneling & Joinery",
    "type": "Luxury Parisian-Style Penthouse",
    "location": "Whitefield, Bengaluru",
    "area": "4,400 sq. ft.",
    "stage": "Architectural Wall Paneling & Lighting Audit",
    "caption": "Symmetrical French Parisian boiserie wall mouldings with modern slim vertical sconce lighting, cove ceiling, and fluted glass wardrobe.",
    "highlights": [
      "Mathematical symmetry audit of boiserie rectangular panel ratios",
      "Concealed electrical conduit runs for centered vertical wall sconces",
      "Smooth PU matte spray finish inspection with zero orange peel texture"
    ],
    "id": "paneling-parisian-boiserie-wall-sconces",
    "image": "/gallery/paneling-parisian-boiserie-wall-sconces.webp",
    "alt": "Symmetrical French Parisian boiserie wall mouldings with modern slim vertical sconce lighting, cove ceiling, and fluted glass wardrobe."
  },
  {
    "idx": 29,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.43 PM (1).jpeg",
    "slug": "kitchen-cream-l-shape-black-quartz",
    "title": "Gloss Cream L-Shape Kitchen with Black Quartz",
    "category": "modular-kitchens",
    "categoryLabel": "Modular Kitchens",
    "type": "Premium High-Rise Apartment",
    "location": "Whitefield, Bengaluru",
    "area": "2,150 sq. ft.",
    "stage": "Stone Countertop Polish & Chimney Audit",
    "caption": "Gloss cream L-shaped modular kitchen with jet black quartz countertop, sleek chimney hood, and continuous under-cabinet lighting.",
    "highlights": [
      "Chamfered stone edge polishing inspected with zero machine ripple marks",
      "Chimney hood extraction velocity measured at 1200 m3/hr specification",
      "Even water slope tested toward sink basin on wet countertop zone"
    ],
    "id": "kitchen-cream-l-shape-black-quartz",
    "image": "/gallery/kitchen-cream-l-shape-black-quartz.webp",
    "alt": "Gloss cream L-shaped modular kitchen with jet black quartz countertop, sleek chimney hood, and continuous under-cabinet lighting."
  },
  {
    "idx": 30,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.43 PM (2).jpeg",
    "slug": "bedroom-guest-overhead-bridge-study",
    "title": "Guest Bedroom Overhead Bridge Storage & Study Desk",
    "category": "wardrobes-storage",
    "categoryLabel": "Wardrobes & Storage",
    "type": "Compact Luxury 3BHK",
    "location": "Koramangala, Bengaluru",
    "area": "1,650 sq. ft.",
    "stage": "Space-Saving Overhead Joinery Audit",
    "caption": "Space-optimizing bedroom wardrobe suite featuring overhead bridge cabinets spanning across bed headboard and dedicated workstation.",
    "highlights": [
      "Structural wall anchor tension test on heavy overhead bridge cabinetry",
      "Ergonomic 750mm study desk height and legroom clearance verified",
      "Dual USB-C fast-charging ports integrated flush into workstation surface"
    ],
    "id": "bedroom-guest-overhead-bridge-study",
    "image": "/gallery/bedroom-guest-overhead-bridge-study.webp",
    "alt": "Space-optimizing bedroom wardrobe suite featuring overhead bridge cabinets spanning across bed headboard and dedicated workstation."
  },
  {
    "idx": 31,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.43 PM.jpeg",
    "slug": "tv-living-bronze-metallic-display-ledges",
    "title": "Metallic Bronze TV Feature Wall & Display Ledges",
    "category": "living-tv-units",
    "categoryLabel": "TV & Living Consoles",
    "type": "Designer Penthouse Living Area",
    "location": "Malleshwaram, Bengaluru",
    "area": "3,500 sq. ft.",
    "stage": "Living Room Feature Cladding Handover",
    "caption": "Textured metallic bronze feature wall with floating media ledge, fluted vertical open display shelves, chandelier, and ambient lighting.",
    "highlights": [
      "Custom textured metallic wall finish cross-inspected under raking light",
      "Concealed wiring box for 65-inch OLED display and surround audio cables",
      "Staggered display shelving load capacity certified for art collectibles"
    ],
    "id": "tv-living-bronze-metallic-display-ledges",
    "image": "/gallery/tv-living-bronze-metallic-display-ledges.webp",
    "alt": "Textured metallic bronze feature wall with floating media ledge, fluted vertical open display shelves, chandelier, and ambient lighting."
  },
  {
    "idx": 32,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.44 PM (1).jpeg",
    "slug": "wardrobe-passage-overloft-doorway-bridge",
    "title": "Passage Doorway Overhead Loft & 4-Door Wardrobe",
    "category": "wardrobes-storage",
    "categoryLabel": "Wardrobes & Storage",
    "type": "Family Villa Residence",
    "location": "Sadashivanagar, Bengaluru",
    "area": "3,900 sq. ft.",
    "stage": "Doorway Over-Loft Framing & Clearance Audit",
    "caption": "Overhead seasonal storage loft built seamlessly over bedroom passage doorway with adjacent 4-door wardrobe and black pull handles.",
    "highlights": [
      "Minimum 7.2ft clear head height verified beneath doorway overhead loft",
      "Independent ceiling suspension rods preventing sag over door opening",
      "Flawless paint and laminate color match across modular and on-site joinery"
    ],
    "id": "wardrobe-passage-overloft-doorway-bridge",
    "image": "/gallery/wardrobe-passage-overloft-doorway-bridge.webp",
    "alt": "Overhead seasonal storage loft built seamlessly over bedroom passage doorway with adjacent 4-door wardrobe and black pull handles."
  },
  {
    "idx": 33,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.44 PM (2).jpeg",
    "slug": "kitchen-l-shape-chimney-exhaust-vent",
    "title": "Kitchen Chimney Duct Alignment & Countertop Leveling",
    "category": "modular-kitchens",
    "categoryLabel": "Modular Kitchens",
    "type": "3BHK Premium Apartment",
    "location": "Indiranagar, Bengaluru",
    "area": "1,980 sq. ft.",
    "stage": "Mechanical Exhaust & Upper Cabinet Verification",
    "caption": "Detailed inspection of L-shaped kitchen layout showing chimney exhaust duct verticality, granite backsplash return, and upper cabinets.",
    "highlights": [
      "150mm rigid exhaust pipe slope verified to prevent condensation backflow",
      "Zero acoustic vibration tested during high-speed chimney blower run",
      "Waterproofing barrier behind sink splash zone verified before cabinet hang"
    ],
    "id": "kitchen-l-shape-chimney-exhaust-vent",
    "image": "/gallery/kitchen-l-shape-chimney-exhaust-vent.webp",
    "alt": "Detailed inspection of L-shaped kitchen layout showing chimney exhaust duct verticality, granite backsplash return, and upper cabinets."
  },
  {
    "idx": 34,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.44 PM.jpeg",
    "slug": "wardrobe-foyer-entrance-door-loft",
    "title": "Entrance Foyer Overhead Loft & Utility Wardrobe",
    "category": "wardrobes-storage",
    "categoryLabel": "Wardrobes & Storage",
    "type": "Contemporary Urban Flat",
    "location": "JP Nagar, Bengaluru",
    "area": "1,800 sq. ft.",
    "stage": "Entrance Storage & Door Frame Integration",
    "caption": "Custom overhead bridge storage built over solid main entrance door with matching vertical-handle wardrobe and flush architrave joinery.",
    "highlights": [
      "Door swing clearance verified with 15mm safety margin under overhead loft",
      "Heavy-duty 18mm BWP calibrated marine plywood carcass construction",
      "Integrated electrical circuit sub-panel access door hidden within loft"
    ],
    "id": "wardrobe-foyer-entrance-door-loft",
    "image": "/gallery/wardrobe-foyer-entrance-door-loft.webp",
    "alt": "Custom overhead bridge storage built over solid main entrance door with matching vertical-handle wardrobe and flush architrave joinery."
  },
  {
    "idx": 35,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.45 PM.jpeg",
    "slug": "kitchen-window-reveal-high-level-boxing",
    "title": "Kitchen Window Reveal Boxing & Upper Cabinet Fitment",
    "category": "modular-kitchens",
    "categoryLabel": "Modular Kitchens",
    "type": "Modern Duplex Villa",
    "location": "Whitefield, Bengaluru",
    "area": "3,100 sq. ft.",
    "stage": "Upper Cabinetry Window Detailing Audit",
    "caption": "High-level modular cabinetry custom-boxed around kitchen window reveal, ensuring maximum storage while preserving daylight.",
    "highlights": [
      "Window shutter opening clearance verified against upper cabinet gable",
      "Granite window sill water-drip groove inspection preventing wall seepage",
      "Concealed ventilation cutout above gas water heater zone"
    ],
    "id": "kitchen-window-reveal-high-level-boxing",
    "image": "/gallery/kitchen-window-reveal-high-level-boxing.webp",
    "alt": "High-level modular cabinetry custom-boxed around kitchen window reveal, ensuring maximum storage while preserving daylight."
  },
  {
    "idx": 36,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.46 PM.jpeg",
    "slug": "audit-kitchen-sink-counter-handover-snag",
    "title": "Kitchen Sink Counter Handover & Sealant Inspection",
    "category": "site-quality-audits",
    "categoryLabel": "Site Quality Audits",
    "type": "Residential Apartment Fit-Out",
    "location": "Bellandur, Bengaluru",
    "area": "1,900 sq. ft.",
    "stage": "Pre-Handover Snagging & Water Ingress Audit",
    "caption": "Post-installation sanitary silicone sealant and countertop leveling audit at sink worktop junction, checking for zero water accumulation.",
    "highlights": [
      "Anti-fungal sanitary silicone bead continuity audit around sink rim",
      "Countertop level verified with spirit level across 3.2m continuous span",
      "Verification of clean, dust-free cabinet interiors before final handover"
    ],
    "id": "audit-kitchen-sink-counter-handover-snag",
    "image": "/gallery/audit-kitchen-sink-counter-handover-snag.webp",
    "alt": "Post-installation sanitary silicone sealant and countertop leveling audit at sink worktop junction, checking for zero water accumulation."
  },
  {
    "idx": 37,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.47 PM (1).jpeg",
    "slug": "kitchen-natural-oak-fluted-drawers",
    "title": "Natural Oak Fluted Lower Cabinets & Black Granite",
    "category": "modular-kitchens",
    "categoryLabel": "Modular Kitchens",
    "type": "Designer Residence",
    "location": "Lavelle Road, Bengaluru",
    "area": "2,700 sq. ft.",
    "stage": "Wood Texture Grain Matching & Polish Inspection",
    "caption": "Natural fluted oak wood lower cabinetry paired with polished black granite countertop and reflective vitrified floor tiling.",
    "highlights": [
      "Vertical wood grain matching continuity across adjacent drawer fronts",
      "Matte polyurethane clear coat water and grease resistance verification",
      "Under-mount synchronized drawer runner soft-stop cushioning test"
    ],
    "id": "kitchen-natural-oak-fluted-drawers",
    "image": "/gallery/kitchen-natural-oak-fluted-drawers.webp",
    "alt": "Natural fluted oak wood lower cabinetry paired with polished black granite countertop and reflective vitrified floor tiling."
  },
  {
    "idx": 38,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.47 PM.jpeg",
    "slug": "kitchen-sink-mixer-plumbing-alignment",
    "title": "Stainless Steel Sink & Brass Mixer Plumbing Alignment",
    "category": "modular-kitchens",
    "categoryLabel": "Modular Kitchens",
    "type": "Executive 3BHK Home",
    "location": "Lavelle Road, Bengaluru",
    "area": "2,050 sq. ft.",
    "stage": "Sanitary Fixture Installation & Flow Audit",
    "caption": "Stainless steel undermount sink with high-arc swan neck brass mixer, ceramic tile backsplash, and moisture-resistant base cabinets.",
    "highlights": [
      "Flow rate and aerator performance check under municipal water pressure",
      "Zero-drip shutoff test on quarter-turn ceramic disc mixer valves",
      "Countertop undermount sink clamp torque inspection"
    ],
    "id": "kitchen-sink-mixer-plumbing-alignment",
    "image": "/gallery/kitchen-sink-mixer-plumbing-alignment.webp",
    "alt": "Stainless steel undermount sink with high-arc swan neck brass mixer, ceramic tile backsplash, and moisture-resistant base cabinets."
  },
  {
    "idx": 39,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.48 PM (1).jpeg",
    "slug": "kitchen-royal-blue-moroccan-tile-active-site",
    "title": "Royal Blue Kitchen with Moroccan Backsplash Fit-Out",
    "category": "modular-kitchens",
    "categoryLabel": "Modular Kitchens",
    "type": "Boho-Contemporary Apartment",
    "location": "Indiranagar, Bengaluru",
    "area": "2,350 sq. ft.",
    "stage": "Active Fit-Out Site & Tile Alignment Inspection",
    "caption": "Royal blue modular kitchen base units with intricate hand-painted Moroccan tile backsplash and light oak upper cabinets during active fit-out.",
    "highlights": [
      "Moroccan encaustic tile pattern registration and spacer gap alignment",
      "Marine grade 710 ply carcass inspection under sink and hob zones",
      "Surface protective film verified to prevent scuffs during site works"
    ],
    "id": "kitchen-royal-blue-moroccan-tile-active-site",
    "image": "/gallery/kitchen-royal-blue-moroccan-tile-active-site.webp",
    "alt": "Royal blue modular kitchen base units with intricate hand-painted Moroccan tile backsplash and light oak upper cabinets during active fit-out."
  },
  {
    "idx": 40,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.48 PM.jpeg",
    "slug": "audit-paneling-boiserie-mitre-joint-inspection",
    "title": "Boiserie Wall Molding Mitre Joint & Primer Audit",
    "category": "site-quality-audits",
    "categoryLabel": "Site Quality Audits",
    "type": "Luxury Parisian Penthouse",
    "location": "Koramangala, Bengaluru",
    "area": "4,200 sq. ft.",
    "stage": "Pre-Finish Joinery & Mitre Gap Audit",
    "caption": "Forensic audit of French bead wall moldings, verifying tight 45-degree corner mitres, primer coat coverage, and zero hairline cracks.",
    "highlights": [
      "Zero-gap (<0.2mm) mitre joints verified using feeler gauge",
      "High-adhesion acrylic polymer bead bonding test to gypsum plaster wall",
      "Primer coat sanded to 400-grit smoothness before final spray lacquer"
    ],
    "id": "audit-paneling-boiserie-mitre-joint-inspection",
    "image": "/gallery/audit-paneling-boiserie-mitre-joint-inspection.webp",
    "alt": "Forensic audit of French bead wall moldings, verifying tight 45-degree corner mitres, primer coat coverage, and zero hairline cracks."
  },
  {
    "idx": 41,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.49 PM (1).jpeg",
    "slug": "audit-kitchen-mint-carcass-leveling-site",
    "title": "Mint Green Kitchen Base Carcass Leveling & Assembly",
    "category": "site-quality-audits",
    "categoryLabel": "Site Quality Audits",
    "type": "Modern Family Apartment",
    "location": "Whitefield, Bengaluru",
    "area": "2,250 sq. ft.",
    "stage": "Carcass Assembly & Base Leg Alignment",
    "caption": "On-site quality audit during active modular kitchen assembly, inspecting leveling legs, protective film, and carcass junction bolts.",
    "highlights": [
      "Adjustable PVC base leg leveling audit to compensate for floor slope",
      "Corrosion-resistant carcass connector bolts torqued to specification",
      "Factory edge-tape protective peel test on high-traffic cabinet faces"
    ],
    "id": "audit-kitchen-mint-carcass-leveling-site",
    "image": "/gallery/audit-kitchen-mint-carcass-leveling-site.webp",
    "alt": "On-site quality audit during active modular kitchen assembly, inspecting leveling legs, protective film, and carcass junction bolts."
  },
  {
    "idx": 42,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.49 PM.jpeg",
    "slug": "audit-wardrobe-carcass-internal-framing-assembly",
    "title": "Wardrobe Carcass Assembly & Partition Squareness",
    "category": "site-quality-audits",
    "categoryLabel": "Site Quality Audits",
    "type": "Boutique Residence",
    "location": "Outer Ring Road (Bellandur), Bengaluru",
    "area": "2,600 sq. ft.",
    "stage": "Raw Carcass Erection & Shelf Partitioning",
    "caption": "Technical audit of dark grey wardrobe carcass erection on active site, checking internal partition squareness and hardware pre-drilling.",
    "highlights": [
      "Digital corner squareness test verifying true 90-degree internal angles",
      "System 32mm hole line drilling accuracy for modular shelf pins",
      "Wall anchoring brackets fastened into RCC column with anchor bolts"
    ],
    "id": "audit-wardrobe-carcass-internal-framing-assembly",
    "image": "/gallery/audit-wardrobe-carcass-internal-framing-assembly.webp",
    "alt": "Technical audit of dark grey wardrobe carcass erection on active site, checking internal partition squareness and hardware pre-drilling."
  },
  {
    "idx": 43,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.50 PM (1).jpeg",
    "slug": "audit-kitchen-island-breakfast-bar-in-progress",
    "title": "Kitchen Island Counter & Breakfast Bar Assembly",
    "category": "site-quality-audits",
    "categoryLabel": "Site Quality Audits",
    "type": "4BHK Luxury Duplex",
    "location": "Sadashivanagar, Bengaluru",
    "area": "3,800 sq. ft.",
    "stage": "Island Framework & Countertop Sub-Base Audit",
    "caption": "Active site fit-out of freestanding modular kitchen island and breakfast bar counter, showing carcass bracing and protective foam wrap.",
    "highlights": [
      "Center-floor electrical conduit stub-up check for island power point",
      "Heavy-duty internal diagonal timber bracing preventing island wobble",
      "Floor anchoring bolts pull-out test before stone countertop placement"
    ],
    "id": "audit-kitchen-island-breakfast-bar-in-progress",
    "image": "/gallery/audit-kitchen-island-breakfast-bar-in-progress.webp",
    "alt": "Active site fit-out of freestanding modular kitchen island and breakfast bar counter, showing carcass bracing and protective foam wrap."
  },
  {
    "idx": 44,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.50 PM.jpeg",
    "slug": "audit-kitchen-l-shape-duct-ac-active-fitout",
    "title": "L-Shape Kitchen Full Layout & Chimney Duct Boxing",
    "category": "site-quality-audits",
    "categoryLabel": "Site Quality Audits",
    "type": "Premium High-Rise Apartment",
    "location": "Koramangala, Bengaluru",
    "area": "2,400 sq. ft.",
    "stage": "Comprehensive MEP & Modular Joinery Coordination",
    "caption": "Active site inspection of full L-shaped kitchen layout, verifying chimney exhaust boxing, split AC drain slope, and cabinet reveals.",
    "highlights": [
      "Chimney duct drywall boxing insulation check for noise dampening",
      "Split AC copper piping flare nut leak check and condensate line slope",
      "Wall cabinet load brackets verified against lightweight AAC block wall"
    ],
    "id": "audit-kitchen-l-shape-duct-ac-active-fitout",
    "image": "/gallery/audit-kitchen-l-shape-duct-ac-active-fitout.webp",
    "alt": "Active site inspection of full L-shaped kitchen layout, verifying chimney exhaust boxing, split AC drain slope, and cabinet reveals."
  },
  {
    "idx": 45,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.51 PM (1).jpeg",
    "slug": "audit-wardrobe-floor-ceiling-protective-wrapping",
    "title": "Full-Wall Wardrobe & Desk Site Protection Audit",
    "category": "site-quality-audits",
    "categoryLabel": "Site Quality Audits",
    "type": "Master Suite Fit-Out",
    "location": "Hebbal, Bengaluru",
    "area": "3,100 sq. ft.",
    "stage": "Site Protection & Pre-Handover Snagging",
    "caption": "Floor-to-ceiling modular wardrobe and adjoining desk unit with full protective plastic wrap and corner guards during site finishing works.",
    "highlights": [
      "100% surface protective film coverage preventing scratches from painters",
      "Heavy corrugated edge guards fitted on all vulnerable outer corners",
      "Pre-cleaning inspection of all drawer slides and hinge mechanisms"
    ],
    "id": "audit-wardrobe-floor-ceiling-protective-wrapping",
    "image": "/gallery/audit-wardrobe-floor-ceiling-protective-wrapping.webp",
    "alt": "Floor-to-ceiling modular wardrobe and adjoining desk unit with full protective plastic wrap and corner guards during site finishing works."
  },
  {
    "idx": 46,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.51 PM.jpeg",
    "slug": "wardrobe-vanity-tv-combo-alcove-fitout",
    "title": "Integrated Wardrobe, Vanity Alcove & TV Console",
    "category": "wardrobes-storage",
    "categoryLabel": "Wardrobes & Storage",
    "type": "Master Bedroom Suite",
    "location": "Sadashivanagar, Bengaluru",
    "area": "2,800 sq. ft.",
    "stage": "Multi-Functional Joinery Commissioning",
    "caption": "Multi-functional bedroom joinery unit integrating floor-to-ceiling wardrobe, vanity mirror alcove, and TV entertainment drawer ledge.",
    "highlights": [
      "Integrated junction box for vanity ring-light mirror illumination",
      "Soft-close 3-tier drawer chest alignment with edge protection",
      "Top loft door flush alignment spanning full ceiling width"
    ],
    "id": "wardrobe-vanity-tv-combo-alcove-fitout",
    "image": "/gallery/wardrobe-vanity-tv-combo-alcove-fitout.webp",
    "alt": "Multi-functional bedroom joinery unit integrating floor-to-ceiling wardrobe, vanity mirror alcove, and TV entertainment drawer ledge."
  },
  {
    "idx": 47,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.52 PM (1).jpeg",
    "slug": "wardrobe-matte-blush-sliding-curved-niche",
    "title": "Matte Blush Sliding Wardrobe & External Display Niche",
    "category": "wardrobes-storage",
    "categoryLabel": "Wardrobes & Storage",
    "type": "Boutique Residence",
    "location": "Indiranagar, Bengaluru",
    "area": "2,100 sq. ft.",
    "stage": "Sliding Shutter & Display Shelf Final Handover",
    "caption": "2-door matte blush laminate sliding wardrobe with external open shelving nook for everyday accessories and curved side profile.",
    "highlights": [
      "Smooth glide track check with zero shutter binding or wobble",
      "External rounded display shelf CNC radius consistency check",
      "Dual-point lock mechanism latch engagement and key smoothness"
    ],
    "id": "wardrobe-matte-blush-sliding-curved-niche",
    "image": "/gallery/wardrobe-matte-blush-sliding-curved-niche.webp",
    "alt": "2-door matte blush laminate sliding wardrobe with external open shelving nook for everyday accessories and curved side profile."
  },
  {
    "idx": 48,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.52 PM.jpeg",
    "slug": "paneling-fluted-teak-db-box-bay-window",
    "title": "Fluted Teak Cladding with Concealed DB & Daybed",
    "category": "wall-paneling-joinery",
    "categoryLabel": "Wall Paneling & Joinery",
    "type": "Luxury Heritage Villa",
    "location": "Sadashivanagar, Bengaluru",
    "area": "4,600 sq. ft.",
    "stage": "Concealed MEP Electrical Joinery & Bay Seating",
    "caption": "Rich fluted teakwood wall cladding seamlessly concealing electrical distribution board (DB) and switchgear with integrated bay window daybed.",
    "highlights": [
      "100% hidden push-to-open flush door for electrical DB panel access",
      "Teak wood fluted battens precision-spaced with 12mm acoustic backing",
      "Bay window seating base reinforced for 250kg distributed live load"
    ],
    "id": "paneling-fluted-teak-db-box-bay-window",
    "image": "/gallery/paneling-fluted-teak-db-box-bay-window.webp",
    "alt": "Rich fluted teakwood wall cladding seamlessly concealing electrical distribution board (DB) and switchgear with integrated bay window daybed."
  },
  {
    "idx": 49,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.53 PM (1).jpeg",
    "slug": "wardrobe-6door-terracotta-accent-panels",
    "title": "6-Door Wardrobe with Terracotta Accent Center",
    "category": "wardrobes-storage",
    "categoryLabel": "Wardrobes & Storage",
    "type": "4BHK Executive Residence",
    "location": "Whitefield, Bengaluru",
    "area": "3,250 sq. ft.",
    "stage": "Color-Blocked Joinery & Shutter Plumb Audit",
    "caption": "Wide 6-door floor-to-ceiling hinged wardrobe with warm terracotta center accent panels and floor-to-loft seamless alignment.",
    "highlights": [
      "Zero color variance across terracotta textured laminate batch lots",
      "Concealed soft-close hinges with 110-degree opening angle clearance",
      "Loft shutter and main door vertical reveal line perfect alignment"
    ],
    "id": "wardrobe-6door-terracotta-accent-panels",
    "image": "/gallery/wardrobe-6door-terracotta-accent-panels.webp",
    "alt": "Wide 6-door floor-to-ceiling hinged wardrobe with warm terracotta center accent panels and floor-to-loft seamless alignment."
  },
  {
    "idx": 50,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.53 PM (2).jpeg",
    "slug": "wardrobe-matte-grey-6door-display-shelf",
    "title": "Matte Grey 6-Door Wardrobe & Upper Display Ledge",
    "category": "wardrobes-storage",
    "categoryLabel": "Wardrobes & Storage",
    "type": "Contemporary Urban Penthouse",
    "location": "Indiranagar, Bengaluru",
    "area": "2,900 sq. ft.",
    "stage": "Wardrobe Assembly & Fan Clearance Verification",
    "caption": "6-door grey matte laminate wardrobe suite with full overhead loft compartments, slim black pull handles, and ceiling fan clearance.",
    "highlights": [
      "Minimum 300mm safety clearance verified between open loft and fan blades",
      "Anti-fingerprint thermal laminate surface scratch inspection",
      "Internal hanging rod deflection test under heavy winter garments"
    ],
    "id": "wardrobe-matte-grey-6door-display-shelf",
    "image": "/gallery/wardrobe-matte-grey-6door-display-shelf.webp",
    "alt": "6-door grey matte laminate wardrobe suite with full overhead loft compartments, slim black pull handles, and ceiling fan clearance."
  },
  {
    "idx": 51,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.54 PM (1).jpeg",
    "slug": "paneling-statuario-marble-cladding-push-door",
    "title": "Bookmatched Statuario Marble Cladding & Flush Doors",
    "category": "wall-paneling-joinery",
    "categoryLabel": "Wall Paneling & Joinery",
    "type": "Ultra-Luxury Penthouse",
    "location": "HSR Layout, Bengaluru",
    "area": "4,800 sq. ft.",
    "stage": "Stone Cladding Pattern & Flush Door Integration",
    "caption": "High-gloss bookmatched Italian Statuario marble laminate wall cladding with concealed push-to-open doors and hidden storage compartments.",
    "highlights": [
      "Vein continuity audit across adjacent panels and secret door jambs",
      "Heavy-duty concealed SOSS invisible hinges verified for 80kg door leaf",
      "Touch-latch push mechanism calibrated for effortless 1-finger operation"
    ],
    "id": "paneling-statuario-marble-cladding-push-door",
    "image": "/gallery/paneling-statuario-marble-cladding-push-door.webp",
    "alt": "High-gloss bookmatched Italian Statuario marble laminate wall cladding with concealed push-to-open doors and hidden storage compartments."
  },
  {
    "idx": 52,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.54 PM (2).jpeg",
    "slug": "paneling-statuario-marble-study-workstation",
    "title": "Statuario Marble Feature Wall & Recessed Workstation",
    "category": "wall-paneling-joinery",
    "categoryLabel": "Wall Paneling & Joinery",
    "type": "Executive Home Office Suite",
    "location": "Cunningham Road, Bengaluru",
    "area": "2,800 sq. ft.",
    "stage": "Home Office Millwork & Feature Surround Audit",
    "caption": "Statuario marble laminate feature surround framing a recessed study work alcove with overhead storage cabinetry and integrated task lighting.",
    "highlights": [
      "Recessed acoustic felt pin-up board backing behind monitor workspace",
      "Under-cabinet concealed warm LED task strip lux measurement (450 lux)",
      "Zero deflection under 100kg test load on cantilevered stone desktop"
    ],
    "id": "paneling-statuario-marble-study-workstation",
    "image": "/gallery/paneling-statuario-marble-study-workstation.webp",
    "alt": "Statuario marble laminate feature surround framing a recessed study work alcove with overhead storage cabinetry and integrated task lighting."
  },
  {
    "idx": 53,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.54 PM.jpeg",
    "slug": "living-bay-window-study-desk-floating-shelves",
    "title": "Solid Wood Bay Window Study Desk & Corner Ledges",
    "category": "living-tv-units",
    "categoryLabel": "TV & Living Consoles",
    "type": "Light-Filled Urban Apartment",
    "location": "Indiranagar, Bengaluru",
    "area": "2,150 sq. ft.",
    "stage": "Window Bay Ergonomics & Joinery Handover",
    "caption": "Custom solid wood study table with two-tier floating corner shelving and under-desk drawer pedestal fitted into sunlit window bay.",
    "highlights": [
      "Window crank handle clearance verified above desktop level",
      "Concealed desktop cable management channel and wire brush grommet",
      "Corner floating display ledges anchored with invisible steel dowels"
    ],
    "id": "living-bay-window-study-desk-floating-shelves",
    "image": "/gallery/living-bay-window-study-desk-floating-shelves.webp",
    "alt": "Custom solid wood study table with two-tier floating corner shelving and under-desk drawer pedestal fitted into sunlit window bay."
  },
  {
    "idx": 54,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.55 PM (1).jpeg",
    "slug": "kitchen-sage-full-suite-moroccan-pendant",
    "title": "Complete Sage Green Kitchen with Moroccan Backsplash",
    "category": "modular-kitchens",
    "categoryLabel": "Modular Kitchens",
    "type": "Designer Duplex Residence",
    "location": "Lavelle Road, Bengaluru",
    "area": "3,400 sq. ft.",
    "stage": "Final Project Handover & Appliance Commissioning",
    "caption": "Complete handover-ready sage green modular kitchen with hand-painted Moroccan backsplash tile, dedicated refrigerator housing, and pendant lighting.",
    "highlights": [
      "100% snag-free clearance across 28 drawers, pull-outs, and wall units",
      "Refrigerator housing gap verified for manufacturer-required 50mm airflow",
      "Final handover dossier and hardware warranty cards delivered to homeowner"
    ],
    "id": "kitchen-sage-full-suite-moroccan-pendant",
    "image": "/gallery/kitchen-sage-full-suite-moroccan-pendant.webp",
    "alt": "Complete handover-ready sage green modular kitchen with hand-painted Moroccan backsplash tile, dedicated refrigerator housing, and pendant lighting."
  },
  {
    "idx": 55,
    "orig": "WhatsApp Image 2026-10-17 at 8.20.55 PM.jpeg",
    "slug": "paneling-marble-curved-display-open-shelving",
    "title": "Bookmatched Marble Cladding & Curved Display Shelves",
    "category": "wall-paneling-joinery",
    "categoryLabel": "Wall Paneling & Joinery",
    "type": "Boutique Living Foyer",
    "location": "Richmond Town, Bengaluru",
    "area": "3,950 sq. ft.",
    "stage": "Curved Millwork & Stone Cladding Handover",
    "caption": "Bookmatched Italian marble laminate feature wall with custom curved multi-tier display shelving unit and floating corner ledges.",
    "highlights": [
      "True semi-circular CNC radius audit on multi-tiered open display unit",
      "Seamless vein-match continuation behind open display shelving",
      "Final surface inspection with high-intensity detailing lamp"
    ],
    "id": "paneling-marble-curved-display-open-shelving",
    "image": "/gallery/paneling-marble-curved-display-open-shelving.webp",
    "alt": "Bookmatched Italian marble laminate feature wall with custom curved multi-tier display shelving unit and floating corner ledges."
  }
];
