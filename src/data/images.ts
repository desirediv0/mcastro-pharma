/**
 * Photography registry. All files are in /public/images (licensed stock photography, resized for web).
 * No photo here depicts McASTRO's own facility, staff or founder. Replace with authentic company photos
 * when supplied (keep the same file names and everything updates).
 */
export interface Photo { src: string; alt: string; w: number; h: number }

export const photos = {
  labTeam: { src: '/images/lab-team.jpg', alt: 'Researchers working with laboratory equipment in a modern pharmaceutical laboratory', w: 2000, h: 1334 },
  labInterior: { src: '/images/lab-interior.jpg', alt: 'Modern laboratory bench with microscope, monitors and pipettes', w: 2000, h: 1125 },
  tabletLine: { src: '/images/tablet-line.jpg', alt: 'Technician in protective clothing operating a tablet production line', w: 2000, h: 757 },
  cleanroom: { src: '/images/cleanroom.jpg', alt: 'Technician in protective clothing beside stainless-steel processing equipment in a clean room', w: 2000, h: 1333 },
  qcLab: { src: '/images/qc-lab.jpg', alt: 'Scientists carrying out quality inspection in a research laboratory', w: 2000, h: 1333 },
  warehouse: { src: '/images/warehouse.jpg', alt: 'Large distribution warehouse with racks of palletised goods', w: 2000, h: 1334 },
  pharmacy: { src: '/images/pharmacy.jpg', alt: 'Shelves stocked with medicines in a pharmacy', w: 2000, h: 1333 },
} satisfies Record<string, Photo>

const pool = [photos.tabletLine, photos.cleanroom, photos.labTeam, photos.qcLab, photos.labInterior, photos.pharmacy, photos.warehouse]
const positions = ['center', '30% 50%', '70% 40%', 'center 30%', '60% 60%', '20% 50%', 'center 70%']
/** Deterministic hero photo + crop for a category, by its index. Different crops keep pages distinct. */
export const categoryPhoto = (index: number) => ({ photo: pool[index % pool.length], position: positions[(index * 3) % positions.length] })
