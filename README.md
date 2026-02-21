# โครงการคัดเลือกสถานศึกษา | โรงเรียนดนตรีไทย ๑๐๐ เปอร์เซ็นต์

เว็บไซต์ลงทะเบียนและประชาสัมพันธ์โครงการคัดเลือกกิจกรรมโรงเรียนดนตรีไทย 100 เปอร์เซ็นต์ ประจำปีงบประมาณ พ.ศ. 2569 โดยกรมส่งเสริมวัฒนธรรม กระทรวงวัฒนธรรม

## 🎵 เกี่ยวกับโครงการ

โครงการนี้มีวัตถุประสงค์เพื่อสืบสาน รักษา และต่อยอดวิชาดนตรีไทยให้คงอยู่คู่สังคมไทย โดยส่งเสริมสถานศึกษาที่มีการจัดการเรียนการสอนดนตรีไทยอย่างมีคุณภาพ

## 🚀 เทคโนโลยีที่ใช้

- **Next.js**: 16.1.6 (App Router)
- **React**: 19.2.4
- **TypeScript**: 5.7.3
- **TailwindCSS**: 4.2.0
- **Framer Motion**: 11.18.0
- **Radix UI**: Components Library
- **Lucide React**: Icons
- **Vercel Analytics**: 1.6.1

## 📋 ความต้องการของระบบ

- Node.js 18.x หรือสูงกว่า
- npm, yarn, หรือ pnpm

## 🛠️ การติดตั้ง

1. Clone repository

```bash
git clone https://github.com/9golfy/thai-music-fe.git
cd thai-music-fe
```

2. ติดตั้ง dependencies

```bash
npm install
# หรือ
yarn install
# หรือ
pnpm install
```

3. รันโปรเจกต์ในโหมด development

```bash
npm run dev
# หรือ
yarn dev
# หรือ
pnpm dev
```

4. เปิดเบราว์เซอร์ที่ [http://localhost:3000](http://localhost:3000)

## 📦 คำสั่งที่ใช้งาน

```bash
# รัน development server
npm run dev

# Build สำหรับ production
npm run build

# รัน production server
npm run start

# ตรวจสอบ code ด้วย ESLint
npm run lint
```

## 🎨 ฟีเจอร์หลัก

- ✨ Hero Section พร้อม Cinematic Gold Title Effect
- 🎵 Music Wave Animation Background
- 📱 Responsive Design (Mobile & Desktop)
- 🎯 Active Navigation Menu with Smooth Scroll
- 📸 Auto-sliding Poster Gallery (3 images)
- ❓ FAQ Accordion Section
- 📥 Download QR Code Section
- 🗺️ Google Maps Integration
- 🌐 Social Media Links (Facebook, Website, Line)
- ♿ Accessibility Support (prefers-reduced-motion)

## 📁 โครงสร้างโปรเจกต์

```
thai-music-fe/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── navbar.tsx        # Navigation bar
│   ├── hero-section.tsx  # Hero section
│   ├── features-a.tsx    # Features section A
│   ├── features-b.tsx    # Features section B
│   ├── accordion-section.tsx  # FAQ & Downloads
│   └── footer.tsx        # Footer
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
│   └── images/          # Images
└── styles/              # Additional styles
```

## 🌐 การ Deploy

โปรเจกต์นี้สามารถ deploy ได้ง่ายบน Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/9golfy/thai-music-fe)

หรือ deploy ด้วยตัวเอง:

```bash
npm run build
npm run start
```

## 📞 ติดต่อ

- **Facebook**: [กรมส่งเสริมวัฒนธรรม](https://www.facebook.com/DCP.culture)
- **Website**: [กระทรวงวัฒนธรรม](https://www.culture.go.th/culture_th/main.php?filename=index)
- **Line**: [กลุ่มไลน์โครงการ](https://line.me/ti/g2/4z-joEHAkGqVZuKK18e-nkbVH4F4LuPfhlgwcQ)

## 📄 License

© 2569 กระทรวงวัฒนธรรม. สงวนลิขสิทธิ์.
