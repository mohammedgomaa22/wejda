import { BiGasPump, BiSolidGasPump } from "react-icons/bi";
import {
  GiNeedleDrill,
  GiAnchor,
  GiTeePipe,
  GiMineTruck,
} from "react-icons/gi";
import { IoCarSportOutline, IoCarSportSharp } from "react-icons/io5";
import {
  HiMiniWrenchScrewdriver,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";
import { FaTruckFast } from "react-icons/fa6";
import { LuConstruction } from "react-icons/lu";

import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { GrHostMaintenance } from "react-icons/gr";

import { MdEmail, MdShoppingCart, MdPhoneEnabled } from "react-icons/md";
import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";

import im1 from "public/fields/wallpaperflare.com_wallpaper.jpg";
import im2 from "public/fields/Maintance-min.jpg";
import im3 from "public/fields/Consulting-min.jpg";

import logo1 from "public/home/logo1.png";
import logo2 from "public/home/logo2.png";
import logo3 from "public/home/logo3.png";
import logo4 from "public/home/logo4.png";
import logo5 from "public/home/logo5.png";
import logo6 from "public/home/logo6.png";
import logo7 from "public/home/logo7.png";
import logo8 from "public/home/logo8.png";
import logo9 from "public/home/logo9.png";
import logo10 from "public/home/logo10.png";
import logo11 from "public/home/logo11.png";

import banner1 from "public/parteners/1.png";
import banner2 from "public/parteners/2.png";
import banner3 from "public/parteners/3.png";
import banner5 from "public/parteners/5.png";
import banner6 from "public/parteners/6.png";
import banner7 from "public/parteners/7.png";
import banner8 from "public/parteners/8.png";
import banner10 from "public/parteners/10.png";
import banner11 from "public/parteners/11.png";
import banner12 from "public/parteners/12.png";

import aboutImg from "/public/about/about_banner.png";

import contactImg from "public/contact/Contact Us-min.jpg";

import consultingImg from "public/consulting/Consulting-min.jpg";

export const translation = {
  en: {
    navLinks: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Partners",
        href: "/partners",
      },
      {
        label: "Contact Us",
        href: "/contact",
      },
    ],
    navServiceMenu: {
      title: "Services",
      links: [
        {
          label: "Fields",
          href: "/fields",
        },
        {
          label: "Maintenance",
          href: "/maintenance",
        },
        {
          label: "Consulting",
          href: "/consulting",
        },
      ],
    },
    mainBanner: {
      title: "Wejda Aljadida Company",
      text: "We strive diligently to provide our customers with the best quality of service, not just to meet their expectations, but to exceed them.",
      more: "Read more",
    },
    homeAbout: {
      title: "About",
      text: "Building long-term relationships with our customers and suppliers, and providing customer service through business monitoring, innovation, and advanced technology.",
      desc: "Wajda Al-Jadeeda is a Libyan company established in accordance with the provisions of the Libyan Commercial Law. The company operates in the field of importing various products such as transportation vehicles and accessories, oils and derivatives, vehicle spare parts, machinery, and all necessary products for the oil fields, as well as providing equipment for factories and workshops. We rely on commercial agencies from leading specialized global companies. We have multiple locations in Libya to provide customers with an excellent experience.",
      more: "Read More",
    },
    homeVision: [
      {
        title: "Our Vision",
        text: "Providing high-quality products and services that exceed the expectations of our valued customers.",
      },
      {
        title: "Our Messege",
        text: "Building long-term relationships with our customers and suppliers and providing customer service through business monitoring, innovation, and advanced technology.",
      },
    ],
    homeFields: {
      title: "BROWSE OUR SERVICES",
      fieldsList: [
        {
          id: 0,
          banner: im1,
          title: "Fields",
          description:
            "Wejda Aljadida is your trusted partner in the all fields..",
          page: "/fields",
        },
        {
          id: 1,
          banner: im2,
          title: "Maintenance",
          description:
            "With Wejda Aljadida's comprehensive maintenance service for imported heavy equipment..",
          page: "/maintenance",
        },
        {
          id: 2,
          banner: im3,
          title: "Consulting",
          description:
            "Empowering Your Business Through Strategic Consulting Services..",
          page: "/consulting",
        },
      ],
      more: "Show More",
    },
    homeServices: {
      title: "Services",
      services: [
        {
          title: "Oil & Gas",
          color: "#ef4444",
          icon: <BiGasPump />,
        },
        {
          title: "Drilling",
          color: "#F27B30",
          icon: <GiNeedleDrill />,
        },
        {
          title: "Cars",
          color: "#DD9825",
          icon: <IoCarSportOutline />,
        },
        {
          title: "Spare & Parts",
          color: "#00AA8C",
          icon: <HiOutlineWrenchScrewdriver />,
        },
        {
          title: "Marine",
          color: "#00A1C4",
          icon: <GiAnchor />,
        },
        {
          title: "Pipline",
          color: "#756AAD",
          icon: <GiTeePipe />,
        },
        {
          title: "Heavy Workshops",
          color: "#BD1B8D",
          icon: <FaTruckFast />,
        },
        {
          title: "Heavy Trucks",
          color: "#756AAD",
          icon: <GiMineTruck />,
        },
        {
          title: "Construction",
          color: "#3EB649",
          icon: <LuConstruction />,
        },
      ],
    },
    homePartners: {
      title: "Partners",
      text: "We strive diligently to search for the best partners from all around the world in order to provide our customers with high-quality products at competitive prices.",
    },
    about: {
      title: "About",
      header: {
        mainHeader: "WEJDA ALJADIDA COMPANY",
        text: `Importing and suppling of machinery, heavy equipment, spare parts
              and maintenance service. We are distinguished by high quality -
              guarantee - competitive prices - speed of work - accuracy in work
              - the best sources.`,
      },
      img: aboutImg,
      sectionHeader:
        "Building long-term relationships with our clients and suppliers, and providing customer service through business monitoring, innovation, and advanced technology.",
      sectionText1: `<strong>Wejda Aljadida</strong> is a Libyan company established in accordance to the provision of the Libyan Commercial Law. 
The company works in the field of importing and selling Various products such as (Transportation and their 
accessories, oils and their derivatives, spare parts for vehicles and machines, and all the necessary products 
for the oil fields, and the processing of all factories and workshops) based on commercial agencies in the major 
international specialized companies. As there are multiple locations in Libya to provide customers with great 
experience.`,

      sectionText2: `<strong>Wejda Aljadida</strong> company <strong>was founded in 2012</strong>. In a very short period of time, Wejda Aljadida has become one 
of the Libyan best-known suppliers due to the successful management, considerable experience and dedicated 
team.
We at Wejda Aljadida strive to provide our customers with the best quality service that would not only meet 
their expectations but would exceed them`,
    },
    partners: {
      title: "Partners",
      header: {
        mainHeader: "BROWSE OUR PARTNERS",
        text: `We strive diligently to search for the best partners from all
              around the world in order to provide our customers with
              high-quality products at competitive prices.`,
      },
      partnerList: [
        {
          id: 0,
          image: logo1,
          title: "SNAP ON",
          description: `Sanp On specializes in equipping 
factories and heavy workshops.`,
          banner: banner2,
        },
        {
          id: 1,
          image: logo2,
          title: "RAC",
          description: `The company is based in Germany and specializes 
in the manufacture of heavy trucks and trailers. 
The company makes production according to your 
requirements. Most of the company's clients 
work in the areas of oil exploration, mines, large 
construction sites, transportation and logistics. 
Besides a part of the private sector all over the 
world, they are suppliers of German art crafts 
(GIZ), the United Nations (UN), or its sub-part, 
Example, United Nations, Creative.`,
          banner: banner3,
        },
        {
          id: 2,
          image: logo3,
          title: "UPET",
          description: `With a history of more than 150 years from 
establishing, UPET is a leader in construction of 
mobile drilling rigs in Romania and the region.
Our products are exported to more than 80 
countries of the world to the majority of oil and 
gas extraction regions`,
          banner: banner8,
        },
        {
          id: 3,
          image: logo4,
          title: "77",
          description: `77 Lubricants is one of the largest independent 
lubricating oil brands in Europe. 77 Lubricants 
produces and sells an extensive selection of high 
quality lubricants and specialties that are used 
in a wide range of applications. The products are 
developed and produced by specialists who can 
choose from a wide variety of base oils and additives, making sure they put together lubricants 
that meet the latest standards of the Original 
Equipment Manufacturers (OEM’s) and International Standardization Committee`,
          banner: banner7,
        },
        {
          id: 5,
          image: logo6,
          title: "INTLEF",
          description: `INTLEF Oil and Gas Group Co.,Ltd.is an international group company who is specialized in 
petroleum equipment R & D, manufacturing, 
operation and maintenance, EOR services, 
oilfield goods international trading and EPC 
projects. INTLEF is located in Shanghai,the 
International finance and trade center of 
China`,
          banner: banner10,
        },
        {
          id: 6,
          image: logo7,
          title: "Med marine",
          description: `Med Marine is a Turkish shipbuilder and Turkey's 
leading tugboat operator, providing a broad range 
of services in towage, pilotage and mooring in the 
busiest ports of Turkey for over 20 years`,
          banner: banner11,
        },
        {
          id: 7,
          image: logo8,
          title: "Motosel",
          description: `Motosel Industrial Group, Inc was established
in 1987 as a manufacturer of lubricants and
petrochemical products. Their products are
expertly engineered to provide long-term
 .protection while delivering the best value.`,
          banner: banner12,
        },
        {
          id: 8,
          image: logo9,
          title: "Precision",
          description: `Precision Group is a group of highly qualified
technocrats, with its Headquarters in India
and Italy with fully owned state of the art
technology, manufacturing plants. 30 years of
experience in designing, manufacturing and
supply of instrumentation products, pipe lines
.and petroleum stations.`,
          banner: banner6,
        },
        {
          id: 9,
          image: logo10,
          title: "Padex",
          description: `PADEX AUTO PARTS CANADA is a
Canadian company based in Vancouver,
Canada. It is an innovative and diversified
global supplier of OE quality autoparts
 products.`,
          banner: banner5,
        },
        {
          id: 10,
          image: logo11,
          title: "PROQUISUR",
          description: `PROQUISUR is a Spanish company that was
established in 1985. The company dedicated to
the manufacture and distribution of automotive,
machines, and equipment products.`,
          banner: banner1,
        },
      ],
      more: "Read More",
    },
    contact: {
      title: "Contact Us",
      header: {
        mainHeader: "GET IN TOUCH",
        text: `we welcome your enquiries and happy to speak with you for any of
            your requirements. Please feel free to contact us at any time.`,
      },
      contactImg,
      form: {
        name: "Full Name",
        email: "Your E-mail",
        phone: "Your Phone",
        subject: "Your Subject",
        message: "Your Message",
        button: "SEND MESSAGE",
      },
      cardTitle: "WEJDA ALJADIDA COMPANY",
      cards: [
        {
          id: 0,
          title: "email",
          icon: <MdEmail />,
          data: "info@wejda-aljadida.ly",
        },
        {
          id: 1,
          title: "email",
          icon: <MdShoppingCart />,
          data: "sales@wejda-aljadida.ly",
        },
        {
          id: 2,
          title: "link",
          icon: <FaFacebookSquare />,
          data: "wejdaaljadida",
        },
        {
          id: 3,
          title: "phone",
          icon: <MdPhoneEnabled />,
          data: "+218 91 213 0023",
        },
        {
          id: 4,
          title: "whats",
          icon: <FaWhatsappSquare />,
          data: "+218 91 213 0023",
        },
      ],
    },
    contactComponent: {
      header: {
        mainHeader: "DO NOT WASTE YOUR TIME",
        text: "feel free to contact us at any time."
      },

      link: "CONTACT US"
    },
    fields: {
      title: "Fields",
       header: {
        mainHeader: "BROWSE OUR FIELDS",
        text : "Wejda Aljadida is your trusted partner in the all fields.."
      },
      fieldsList: [
        {
          name: "Oil and Gas",
          icon: <BiSolidGasPump />,
          description:
            "Wejda Aljadida is your trusted partner in the oil and gas industry, providing comprehensive solutions to support your operations.",
        },
        {
          name: "Drilling",
          icon: <GiNeedleDrill />,
          description:
            "Whether it's onshore or offshore drilling, Wejda Aljadida is your trusted partner for all your drilling needs. We strive to exceed expectations, delivering reliable, efficient, and cost-effective solutions that contribute to the success of our clients' projects.",
        },
        {
          name: "Cars",
          icon: <IoCarSportSharp />,
          description:
            "Choose Wejda Aljadida for your car importation needs, and indulge in the joy of owning a meticulously selected, high-quality vehicle.",
        },
        {
          name: "Spare Parts",
          icon: <HiMiniWrenchScrewdriver />,
          description:
            "At Wejda Aljadida, we aim to be your trusted partner for all your spare parts needs. We are dedicated to providing genuine, high-quality parts, exceptional service, and a seamless experience from order placement to delivery.",
        },
        {
          name: "Marine",
          icon: <GiAnchor />,
          description:
            "Wejda Aljadida offers a wide range of marine equipment through highly known partner designed to meet the specific needs of the maritime industry.",
        },
        {
          name: "Pipelines",
          icon: <GiTeePipe />,
          description:
            "Wejda Aljadida provides various types of pipelines that play a crucial role in transporting various substances, such as oil, gas, water, and chemicals, over long distances efficiently and safely.",
        },
        {
          name: "Heavy Workshops",
          icon: <FaTruckFast />,
          description:
            "Wejda Aljadida takes pride in offering a state-of-the-art heavy workshop facility designed to cater to the diverse needs of the maritime and industrial sectors.",
        },
        {
          name: "Heavy Trucks",
          icon: <GiMineTruck />,
          description:
            "By choosing Wejda Aljadida, you can rely on our commitment to delivering technologically advanced, environmentally responsible, and reliable transportation solutions.",
        },
      ],
    },
    maintenance: {
      title: "Maintenance",
      text: "With Wejda Aljadida's comprehensive maintenance service for imported heavy equipment, you can rest assured that your machinery is in capable hands.",
      desc: "At Wejda Aljadida, we understand the critical role that heavy equipment plays in your operations. To ensure optimal performance, reliability, and longevity of your imported heavy equipment, we offer a comprehensive maintenance service tailored to meet your specific needs. Our experienced team of technicians and specialists is well-versed in handling a wide range of heavy equipment, providing you with peace of mind and minimizing downtime. With our commitment to excellence and attention to detail, we strive to be your trusted partner in keeping your heavy equipment in optimal condition.",
      serviceTitle: "Maintenance Services",
      serviceText:
        "With Wejda Aljadida's comprehensive maintenance service for imported heavy equipment, you can rest assured that your machinery is in capable hands.",
      services: [
        {
          icon: <GrHostMaintenance />,
          title: "Custom Maintenance Plans",
          desc: "We recognize that each piece of heavy equipment has unique maintenance requirements. Our team will work closely with you to develop customized maintenance plans that align with the specific needs of your equipment, taking into account factors such as equipment type, usage patterns, and manufacturer recommendations.",
        },
        {
          icon: <GrHostMaintenance />,
          title: "Experienced Technicians",
          desc: "Our maintenance service is delivered by a team of highly skilled technicians who possess extensive experience in working with diverse types of heavy equipment. They are well-versed in the intricacies of imported machinery and are equipped with the necessary knowledge and tools to handle complex maintenance tasks effectively.",
        },
        {
          icon: <GrHostMaintenance />,
          title: "Preventive Maintenance",
          desc: "Preventive maintenance is a core component of our service. By adhering to a proactive approach, we aim to identify and address potential issues before they escalate into major problems.",
        },
      ],
    },
    consulting: {
      title: "Consulting",
      header: {
        mainHeader: "BROWSE OUR CONSULTING",
        text: "Empowering Your Business Through Strategic Consulting Services",
      },
      consultingImg,
      description1: `Our consulting service is dedicated to helping businesses thrive
                and achieve their goals. With a team of seasoned professionals
                and industry experts, we offer comprehensive consulting services
                designed to address the unique challenges and opportunities
                faced by your organization. Through our collaborative approach,
                strategic insights, and tailored solutions, we empower your
                business to make informed decisions, optimize performance, and
                drive sustainable growth.`,
      description2: `Wejda Aljadida is your trusted partner for strategic consulting
                services aimed at driving your business forward. Our expertise
                in strategic planning, operational efficiency, market research,
                financial analysis, change management, and skills development
                equips you with the tools and insights needed to overcome
                challenges and seize opportunities. By collaborating with our
                experienced consultants, you can achieve sustainable growth,
                enhance competitiveness, and position your organization for
                long-term success.`,
      contactText:
        "Contact Wejda Aljadida today and unlock the full potential of your business through our comprehensive consulting services.",
      contact: "contact",
    },
    footer: {
      title: "Contact Us",
      text: "We welcome your inquiries, and we are happy to speak with you regarding any of your requirements. Please feel free to contact us at any time.",
      input: {
        placeholder: "Your email address",
        button: "Subscribe",
      },
      copyRight: `© 2023 
            <a
              href="https://www.instagram.com/moo.fat7y/"
              className="hover:text-[#FF5227] duration-200"
            >
            Wejda Aljadida
            </a>
            . All Rigths Reserved
          `,
      socialLinks: [
        {
          icon: <BsFacebook />,
          href: "https://www.facebook.com",
        },
        {
          icon: <BsInstagram />,
          href: "https://www.instagram.com",
        },
        {
          icon: <BsWhatsapp />,
          href: "https://wa.me/",
        },
        {
          icon: <BsTwitter />,
          href: "https://x.com",
        },
      ],
      dataLinks: [
        {
          title: "Quick Link",
          pages: [
            {
              name: "Home",
              href: "/",
            },
            {
              name: "About",
              href: "/about",
            },
            {
              name: "partners",
              href: "/partners",
            },
            {
              name: "Contact Us",
              href: "/contact",
            },
          ],
        },
        {
          title: "Popular Links",
          pages: [
            {
              name: "Fields",
              href: "/fields",
            },
            {
              name: "Maintenance",
              href: "/maintenance",
            },
            {
              name: "Consulting",
              href: "/consulting",
            },
          ],
        },
      ],
    },
  },
  ar: {
    navLinks: [
      {
        label: "الرئيسيه",
        href: "/",
      },
      {
        label: "عن الشركه",
        href: "/about",
      },
      {
        label: "شركائنا",
        href: "/partners",
      },
      {
        label: "تواصل معنا",
        href: "/contact",
      },
    ],
    navServiceMenu: {
      title: "الخدمات",
      links: [
        {
          label: "المجالات",
          href: "/fields",
        },
        {
          label: "الصيانه",
          href: "/maintenance",
        },
        {
          label: "الاستشاره",
          href: "/consulting",
        },
      ],
    },
    mainBanner: {
      title: "شــركـة وجــدة الجــديـدة",
      text: "نسعى جاهدين لتزويد عملائنا بأفضل جودة خدمة ليس لتلبية توقعاتهم فحسب بل لنتجاوزها.",
      more: "عرض المزيد",
    },
    homeAbout: {
      title: "عن الشركه",
      text: "بناء علاقات طويلة المدي مع عملائنا وموردينا وتقديم خدمة عملاء عن طريق متابعة الأعمال من خلال الابتكار والتكنولوجيا المتقدمة.",
      desc: "وجدة الجديدة هي شركة ليبية تأسست وفقا لأحكام القانون التجاري الليبي، تعمل الشركة في مجال استيراد منتجات مختلفة مثل (وسائل النقل وملحقاتها وزيوت ومشتقاتها وقطع غيار المركبات والآلات وكل ما يلزم من منتجات الحقول النفطية وتجهيز كافة المصانع والورش) معتمدة على التوكيلات التجارية من كبري الشركات العالمية المتخصصة حيث يوجد عدة مواقع في ليبيا لتزويد العملاء بتجربة رائعة.....",
      more: "اقرأ المزيد",
    },
    homeVision: [
      {
        title: "رؤيتنــا",
        text: "بناء علاقات طويلة المدي مع عملائنا وموردينا وتقديم خدمة عملاء عن طريق متابعة الأعمال من خلال الابتكار والتكنولوجيا المتقدمة.",
      },
      {
        title: "رسـالتنـا",
        text: "بناء علاقات طويلة المدي مع عملائنا وموردينا وتقديم خدمة عملاء عن طريق متابعة الأعمال من خلال الابتكار والتكنولوجيا المتقدمة.  ",
      },
    ],
    homeFields: {
      title: "تصفح خدماتنا",
      fieldsList: [
        {
          id: 0,
          banner: im1,
          title: "المجالات",
          description: "وجدة الجديدة هي شريكك الموثوق في جميع المجالات...",
          page: "/fields",
        },
        {
          id: 1,
          banner: im2,
          title: "الصيانه",
          description:
            "مع خدمة الصيانة الشاملة للمعدات الثقيلة المستوردة من وجدة الجديدة..",
          page: "/maintenance",
        },
        {
          id: 2,
          banner: im3,
          title: "الاستشاره",
          description: "تمكين عملك من خلال خدمات الاستشارات الاستراتيجية..",
          page: "/consulting",
        },
      ],
      more: "اعرض المزيد",
    },
    homeServices: {
      title: "خدماتنا",
      services: [
        {
          title: "النفط والغاز",
          color: "#ef4444",
          icon: <BiGasPump />,
        },
        {
          title: "الحفر",
          color: "#F27B30",
          icon: <GiNeedleDrill />,
        },
        {
          title: "سيارات",
          color: "#DD9825",
          icon: <IoCarSportOutline />,
        },
        {
          title: "قطع غيار",
          color: "#00AA8C",
          icon: <HiOutlineWrenchScrewdriver />,
        },
        {
          title: "البحريه",
          color: "#00A1C4",
          icon: <GiAnchor />,
        },
        {
          title: "خطوط الانابيب",
          color: "#756AAD",
          icon: <GiTeePipe />,
        },
        {
          title: "الورش الثقيله",
          color: "#BD1B8D",
          icon: <FaTruckFast />,
        },
        {
          title: "النقل الثقيل",
          color: "#756AAD",
          icon: <GiMineTruck />,
        },
        {
          title: "البناء",
          color: "#3EB649",
          icon: <LuConstruction />,
        },
      ],
    },
    homePartners: {
      title: "شركائنا",
      text: "نسعي جاهدين للبحث عن افضل الشركاء من جميع انحاء العالم لنقدم لعملائنا منتجات ذات جوده عاليه وباسعار تنافسيه",
    },
    about: {
      title: "عن الشركه",
      header: {
        mainHeader: "شركة وجده الجديده",
        text: `استيراد وتوريد الماكينات والمعدات الثقيلة وقطع الغيار وخدمة الصيانة. نتميز بالجودة العالية، الضمان، الأسعار التنافسية، سرعة العمل، الدقة في العمل، وأفضل المصادر.`,
      },
      img: aboutImg,
      sectionHeader:
        "بناء علاقات طويلة الأمد مع عملائنا وموردينا، وتقديم خدمة عملاء عبر مراقبة الأعمال، والابتكار، والتكنولوجيا المتقدمة.",
      sectionText1: `وجدة الجديدة</strong> هي شركة
                ليبية تأسست وفقا لأحكام القانون التجاري الليبي، تعمل الشركة في
                مجال استيراد منتجات مختلفة مثل (وسائل النقل وملحقاتها وزيوت
                ومشتقاتها وقطع غيار المركبات والآلات وكل ما يلزم من منتجات
                الحقول النفطية وتجهيز كافة المصانع والورش) معتمدة على التوكيلات
                التجارية من كبري الشركات العالمية المتخصصة حيث يوجد عدة مواقع في
                ليبيا لتزويد العملاء بتجربة رائعة.....`,

      sectionText2: `تأسست</strong> شركة وجدة
                الجديدة في عام .<strong className="text-gray-700">2012</strong>{" "}
                في فترة قصيرة جدا من الزمن، أصبحت شركة وجدة الجديدة من أكبر
                الموردين في ليبيا بسبب الإدارة الناجحة والخبرة الكبيرة واحترافية
                فريق العمل. نحن في شركة وجدة الجديدة نسعى جاهدين لتزويد عملائنا
                بأفضل جودة خدمة ليس لتلبية توقعاتهم فحسب بل لنتجاوزها.`,
    },
    partners: {
      title: "شركائنا",
      header: {
        mainHeader: "تصفح شركائنا",
        text: `نحن نسعى بجدية للبحث عن أفضل الشركاء من جميع أنحاء العالم لتزويد عملائنا بمنتجات عالية الجودة بأسعار تنافسية.`,
      },
      partnerList: [
        {
          id: 0,
          image: logo1,
          title: "سناب اون",
          description: `شركة سناب اون هي شركة متخصصه 
في تجهيز المصانع والورش الثقيلة.`,
          banner: banner2,
        },
        {
          id: 1,
          image: logo2,
          title: "راك",
          description: `يقع مقر الشركة في ألمانيا وهي متخصصة 
في تصنيع الشاحنات والمقطورات الثقيلة. تقوم 
الشركة بالإنتاج حسب الطلب لتلبية متطلباتك 
المحددة. معظم عملاء الشركة يشتغلون في 
مجال التنقيب عن النفط وفي المناجم ومواقع البناء 
الكبيرة وفي النقل والخدمات اللوجستية. إلى جانب 
عملاء القطاع الخاص في جميع أنحاء العالم ، فهم 
موردون للتعاون الفني الألماني (GIZ (، والأمم 
المتحدة (الأمم المتحدة) والمنظمات الفرعية على 
سبيل المثال مفوضية الأمم المتحدة لشؤون 
اللاجئين.`,
          banner: banner3,
        },
        {
          id: 2,
          image: logo3,
          title: "يوبيت",
          description: `ًا ، تعد UPET شركة 
تاريخ يمتد لأكثر من ١٥٠ عام
رائدة في بناء منصات الحفر المتنقلة في رومانيا. يتم 
تصدير منتجات الشركة إلى أكثر من ٤٥ دولة في 
العالم إلى غالبية مناطق استخراج النفط والغاز`,
          banner: banner8,
        },
        {
          id: 3,
          image: logo4,
          title: "77",
          description: `7 Lubricants هي واحدة من أكبر العلامات 
التجارية لزيوت التشحيم المستقلة في أوروبا. 
تقوم 77 Lubricants بإنتاج وبيع مجموعة واسعة 
من مواد التشحيم عالية الجودة والتخصصات 
المستخدمة في مجموعة واسعة من التطبيقات. 
يتم تطوير المنتجات وإنتاجها بواسطة متخصصين 
يمكنهم الاختيار من بين مجموعة متنوعة من 
الزيوت الأساسية والمواد المضافة ، مع التأكد من 
تجميعهم لمواد التشحيم التي تلبي أحدث معايير 
مصنعي المعدات الأصلية (OEM (ولجان التقييس 
الدولية.`,
          banner: banner7,
        },
        {
          id: 5,
          image: logo6,
          title: "إنتليف",
          description: `هي شركة مجموعة دولية متخصصة في البحث 
والتطوير للمعدات البترولية والتصنيع والتشغيل 
والصيانة وخدمات الاستخلاص المعزز للنفط والتجارة 
الدولية لسلع حقول النفط ومشاريع EPC. يقع 
INTLEFالمقر الرئيسي في شنغهاي ، المركز 
المالي والتجاري الدولي في الصين.
`,
          banner: banner10,
        },
        {
          id: 6,
          image: logo7,
          title: "ميدمارين",
          description: `e Med هي شركة تركية لبناء السفن 
والمشغل الرائد لقوارب القطر في تركيا ، حيث 
تقدم مجموعة واسعة من الخدمات في مجال 
ً ا في 
القطر والإرشاد في أكثر الموانئ ازدحام
ً ا.
تركيا لأكثر من 20 عام`,
          banner: banner11,
        },
        {
          id: 7,
          image: logo8,
          title: "موتوسيل",
          description: `شركة موتوسيل هي شركة أمريكية تم تأسيسها 
عام 1987 كشركة مصنعة لزيوت التشحيم والمنتجات 
البتروكيماوية. تن تصميم منتجاتهم بخبرة لتوفير 
حماية طويلة الأجل مع توفير أفضل قيمة. وهي 
متخصصة في جميع الزيوت والمواد المضافة.`,
          banner: banner12,
        },
        {
          id: 8,
          image: logo9,
          title: "بريسيشن",
          description: `مجموعة بريسيشن هي مجموعة من المصانع 
الفنية المؤهلة تأهيلا عاليا، ويقع مقرها 
الرئيسي في الهند وإيطاليا باستخدام أحدث 
ً ا من الخبرة في تصميم 
التقنيات. 30 عام
وتصنيع وتوريد منتجات الأجهزة وخطوط الأنابيب 
والمحطات النفطية.`,
          banner: banner6,
        },
        {
          id: 9,
          image: logo10,
          title: "باديكس",
          description: `باديكس اوتوبارتس كندا هي شركة كندية 
مقرها في فانكوفر، كندا. باديكس مورد عالمي 
مبتكر و متنوع لمنتجات التشغيل التلقائي ذات 
الجودة العالية (قطع غيار الآلات و المعدات و 
السيارات).`,
          banner: banner5,
        },
        {
          id: 10,
          image: logo11,
          title: "بروكيسور",
          description: `شركة بروكيسور هي شركة إسبانية تأسست 
عام .١٩٨٥ شركة متخصصة في تصنيع وتوزيع 
منتجات الآلات والمعدات والمصانع والسيارات.`,
          banner: banner1,
        },
      ],
      more: "اقرأ المزيد",
    },
    contact: {
      title: "تواصل معنا",
      header: {
        mainHeader: "توصل معنا",
        text: "نرحب باستفساراتكم وسعداء بالتحدث معكم بخصوص أي احتياجات لديكم. يرجى عدم التردد في الاتصال بنا في أي وقت",
      },
      contactImg,
      form: {
        name: "الاسم بالكامل",
        email: "بريدك الالكتروني",
        phone: "رقم هاتفك",
        subject: "العنون",
        message: "الرساله",
        button: "ارسال",
      },
      cardTitle: "شركة وجده الجديده",
      cards: [
        {
          id: 0,
          title: "email",
          icon: <MdEmail />,
          data: "info@wejda-aljadida.ly",
        },
        {
          id: 1,
          title: "email",
          icon: <MdShoppingCart />,
          data: "sales@wejda-aljadida.ly",
        },
        {
          id: 2,
          title: "link",
          icon: <FaFacebookSquare />,
          data: "wejdaaljadida",
        },
        {
          id: 3,
          title: "phone",
          icon: <MdPhoneEnabled />,
          data: "+218 91 213 0023",
        },
        {
          id: 4,
          title: "whats",
          icon: <FaWhatsappSquare />,
          data: "+218 91 213 0023",
        },
      ],
    },
    contactComponent: {
      header: {
        mainHeader: "لا تضيع وقتك",
        text: "لا تتردد في الاتصال بنا في أي وقت."
      },

      link: "اتصل بنا"
    },
    fields: {
      title: "المجالات",
      header: {
        mainHeader: "تصفح مجالاتنا",
        text : "وجدة الجديدة هي شريكك الموثوق في جميع المجالات."
      },
      fieldsList: [
        {
          name: "النفط والغاز",
          icon: <BiSolidGasPump />,
          description:
            "وجدة الجديدة هي شريكك الموثوق به في صناعة النفط والغاز، حيث تقدم حلولاً شاملة لدعم عملياتك.",
        },
        {
          name: "الحفر",
          icon: <GiNeedleDrill />,
          description:
            "سواء كان ذلك في الحفر البري أو البحري، فإن وجدة الجديدة هي شريكك الموثوق به لجميع احتياجات الحفر الخاصة بك.",
        },
        {
          name: "السيارات",
          icon: <IoCarSportSharp />,
          description:
            "في وجدة الجديدة، ندرك أن استيراد السيارة ينطوي على اعتبارات لوجستية مختلفة. ولذلك، فإننا نتولى جميع الإجراءات الورقية والتخليص الجمركي وترتيبات الشحن اللازمة، مما يجعل العملية خالية من المتاعب لعملائنا.",
        },
        {
          name: "قطع الغيار",
          icon: <HiMiniWrenchScrewdriver />,
          description:
            "في وجدة الجديدة، نهدف إلى أن نكون شريكك الموثوق به لجميع احتياجات قطع الغيار. نحن ملتزمون بتوفير قطع غيار أصلية وعالية الجودة وخدمة استثنائية وتجربة سلسة بدءًا من تقديم الطلب وحتى التسليم.",
        },
        {
          name: "البحريه",
          icon: <GiAnchor />,
          description:
            "تقدم وجدة الجديدة مجموعة واسعة من المعدات البحرية من خلال شريك معروف للغاية مصمم لتلبية الاحتياجات المحددة للصناعة البحرية.",
        },
        {
          name: "خطوط الانابيب",
          icon: <GiTeePipe />,
          description:
            "توفر وجدة الجديدة أنواعًا مختلفة من خطوط الأنابيب التي تلعب دورًا حاسمًا في نقل المواد المختلفة، مثل النفط والغاز والمياه والمواد الكيميائية، لمسافات طويلة بكفاءة وأمان.",
        },
        {
          name: "الورش الثقيلة",
          icon: <FaTruckFast />,
          description:
            "تفتخر وجدة الجديدة بتقديم ورشة عمل ثقيلة حديثة مصممة لتلبية الاحتياجات المتنوعة للقطاعين البحري والصناعي. تعمل الورشة الثقيلة كمساحة مخصصة لصيانة وإصلاح وتصنيع الآلات والمعدات الثقيلة.",
        },
        {
          name: "الشاحنات الثقيلة",
          icon: <GiMineTruck />,
          description:
            "باختيارك لوجدة الجديدة، يمكنك الاعتماد على التزامنا بتقديم حلول نقل متقدمة تقنيًا ومسؤولة بيئيًا وموثوقة.تلتزم شركة وجدة الجديدة بالبقاء في طليعة التقدم التكنولوجي في صناعة الشاحنات الثقيلة.",
        },
      ],
    },
    maintenance: {
      title: "الصيانه",
      text: "مع خدمة الصيانة الشاملة للمعدات الثقيلة المستوردة من وجدة الجديدة، يمكنك أن تطمئن بأن آلاتك في أيدٍ قادرة.",
      desc: "في وجدة الجديدة، ندرك الدور الحاسم الذي تلعبه المعدات الثقيلة في عملياتك. لضمان الأداء الأمثل والموثوقية والعمر الافتراضي لمعداتك الثقيلة المستوردة، نقدم خدمة صيانة شاملة مصممة خصيصًا لتلبية احتياجاتك الخاصة. فريقنا المتمرس من الفنيين والمتخصصين ملمون جيدًا بمجموعة واسعة من المعدات الثقيلة، ويوفرون لك الراحة ويقللون من فترات التوقف. مع التزامنا بالتفوق والاهتمام بالتفاصيل، نسعى لنكون شريكك الموثوق في الحفاظ على معداتك الثقيلة في حالة مثلى.",
      serviceTitle: "خدمات الصيانه",
      serviceText:
        "مع خدمة الصيانة الشاملة التي تقدمها وجدة الجديدة للمعدات الثقيلة المستوردة، يمكنك أن تطمئن أن آلاتك في أيدٍ قادرة.",
      services: [
        {
          icon: <GrHostMaintenance />,
          title: "خطط الصيانة المخصصة",
          desc: "ندرك أن كل قطعة من المعدات الثقيلة لديها متطلبات صيانة فريدة. سيعمل فريقنا عن كثب معك لوضع خطط صيانة مخصصة تتوافق مع الاحتياجات المحددة لمعداتك، مع مراعاة عوامل مثل نوع المعدة، أنماط الاستخدام، وتوصيات الشركة المصنعة.",
        },
        {
          icon: <GrHostMaintenance />,
          title: "فنيون ذوو خبرة",
          desc: "تُقدم خدمتنا في الصيانة بواسطة فريق من الفنيين ذوي المهارات العالية الذين يمتلكون خبرة واسعة في التعامل مع مختلف أنواع المعدات الثقيلة. إنهم ملمون جيدًا بتفاصيل المعدات المستوردة ومجهزون بالمعرفة والأدوات اللازمة للتعامل بفعالية مع المهام الصيانة المعقدة.",
        },
        {
          icon: <GrHostMaintenance />,
          title: "الصيانة الوقائية",
          desc: "تعتبر الصيانة الوقائية أحد المكونات الأساسية لخدمتنا. ومن خلال الالتزام بنهج استباقي، نهدف إلى تحديد المشكلات المحتملة ومعالجتها قبل أن تتفاقم إلى مشكلات كبيرة. سيقوم الفنيون لدينا بإجراء عمليات تفتيش منتظمة، والتشحيم، وفحص السوائل، واستبدال المكونات وفقًا لتوصيات الشركة المصنعة.",
        },
      ],
    },
    consulting: {
      title: "الاستشاره",
      header: {
        mainHeader: "تصفح استشارتنا",
        text: "تمكين أعمالك من خلال خدمات الاستشارات الاستراتيجية",
      },
      consultingImg,
      description1: `خدمتنا الاستشارية مخصصة لمساعدة الشركات على الازدهار وتحقيق أهدافها. مع فريق من المهنيين المتمرسين وخبراء الصناعة، نقدم خدمات استشارية شاملة مصممة لمواجهة التحديات والفرص الفريدة التي تواجهها مؤسستك. من خلال نهجنا التعاوني والرؤى الإستراتيجية والحلول المخصصة، نقوم بتمكين عملك من اتخاذ قرارات مستنيرة وتحسين الأداء ودفع النمو المستدام.`,
      description2: `وجدة الجديدة هي شريكك الموثوق به للخدمات الاستشارية الإستراتيجية التي تهدف إلى دفع أعمالك إلى الأمام. إن خبرتنا في التخطيط الاستراتيجي والكفاءة التشغيلية وأبحاث السوق والتحليل المالي وإدارة التغيير وتنمية المهارات تزودك بالأدوات والأفكار اللازمة للتغلب على التحديات واغتنام الفرص. ومن خلال التعاون مع مستشارينا ذوي الخبرة، يمكنك تحقيق النمو المستدام وتعزيز القدرة التنافسية ووضع مؤسستك لتحقيق النجاح على المدى الطويل.`,
      contactText:
        "اتصل بـ وجدة الجديدة اليوم واستفد من الإمكانات الكاملة لعملك من خلال خدماتنا الاستشارية الشاملة",
      contact: "تواصل معنا",
    },
    footer: {
      title: "تواصل معنا",
      text: "نحن نرحب باستفساراتك ويسعدنا التحدث معك بخصوص أي من متطلباتك.لا تتردد في الاتصال بنا في أي وقت",
      input: {
        placeholder: "ادخل بريدك الالكتروني",
        button: "اشترك",
      },
      copyRight: `© 2023 
            <a
              href="https://www.instagram.com/moo.fat7y/"
              className="hover:text-[#FF5227] duration-200"
            >
              وجدة الجديدة
            </a>
            . جميع الحقوق محفوظة
          `,
      socialLinks: [
        {
          icon: <BsFacebook />,
          href: "https://www.facebook.com",
        },
        {
          icon: <BsInstagram />,
          href: "https://www.instagram.com",
        },
        {
          icon: <BsWhatsapp />,
          href: "https://wa.me/",
        },
        {
          icon: <BsTwitter />,
          href: "https://x.com",
        },
      ],
      dataLinks: [
        {
          title: "روابط سريعة",
          pages: [
            {
              name: "الرئيسية",
              href: "/",
            },
            {
              name: "عن الشركة",
              href: "/about",
            },
            {
              name: "شركائنا",
              href: "/partners",
            },
            {
              name: "اتصل بنا",
              href: "/contact",
            },
          ],
        },
        {
          title: "الروابط المعروفة",
          pages: [
            {
              name: "المجالات",
              href: "/fields",
            },
            {
              name: "الصيانة",
              href: "/maintenance",
            },
            {
              name: "الاستشارات",
              href: "/consulting",
            },
          ],
        },
      ],
    },
  },
};
