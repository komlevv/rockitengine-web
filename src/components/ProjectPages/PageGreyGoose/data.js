import logoGGVertical from "./images/grey-goose-logo-black-v.svg";

import imgMain from "./images/grey-goose-main.jpg";
import imgNext from "./images/grey-goose-next.jpg";

import imgWide1 from './images/grey-goose-wide-1.jpg';
import imgWide2 from './images/grey-goose-wide-2.jpg';
import imgWide3 from './images/grey-goose-wide-3.jpg';
import imgWide4 from './images/grey-goose-wide-4.jpg';
import imgWide5 from './images/grey-goose-wide-5.jpg';
import imgWide6 from './images/grey-goose-wide-6.jpg';

import imgSquare1 from './images/grey-goose-square-1.jpg';
import imgSquare2 from './images/grey-goose-square-2.jpg';

import imgSquareS1 from './images/grey-goose-square-s-1.jpg';
import imgSquareS2 from './images/grey-goose-square-s-2.jpg';
import imgSquareS3 from './images/grey-goose-square-s-3.jpg';
import imgSquareS4 from './images/grey-goose-square-s-4.jpg';
import imgSquareS5 from './images/grey-goose-square-s-5.jpg';
import imgSquareS6 from './images/grey-goose-square-s-6.jpg';
import imgSquareS7 from './images/grey-goose-square-s-7.jpg';
import imgSquareS8 from './images/grey-goose-square-s-8.jpg';
import imgSquareS9 from './images/grey-goose-square-s-9.jpg';
import imgSquareS10 from './images/grey-goose-square-s-10.jpg';
import imgSquareS11 from './images/grey-goose-square-s-11.jpg';
import imgSquareS12 from './images/grey-goose-square-s-12.jpg';

import imgVertical1 from './images/grey-goose-vertical-1.jpg';
import imgVertical2 from './images/grey-goose-vertical-2.jpg';
import imgVertical3 from './images/grey-goose-vertical-3.jpg';
import imgVertical4 from './images/grey-goose-vertical-4.jpg';
import {ROUTES} from "../../App/ROUTES";
import Span from "../../Span/Span";

export const data = {
    main: {
        logo: logoGGVertical,
        h: <>Find Your <Span>Favorite</Span></>,
        p: "Experience every corner of the world just the way you like it.",
        items: [
            {
                h: "Industry",
                p: "Beverages"
            },
            {
                h: "Location",
                p: "United States"
            }
        ],
        img: imgMain,
    },
    overview: {
        h: "Overview",
        p: "For the launch of their 'Live Victoriously' campaign, Grey Goose challenged us to develop and visualize an experiential " +
            "toolkit to celebrate big and small moments.  The direction of this creative work marks a further evolution of Grey Goose’s " +
            "brand world, opting for a more self-aware and sensory-oriented approach to the premium spirit’s brand communications.",
        items: {
            a: {
                n: "01",
                h: "What we did",
                p: "",
                subItems: [
                    "Bar Design", "3d Visualiation", "Merchandise Design", "Creative Direction"
                ]
            },
            b: {
                n: "02",
                h: "Tech Stack",
                p: "",
                subItems: [
                    "Autotesk 3ds Max", "Autodesk Maya", "Adobe Photoshop", "Maxon Redshift",
                    "Foundry Nuke", "SketchUp", "Pixologic ZBrush", "Substance Painter"
                ]
            },
        },
    },
    other: {
        a: {
            h: "Approach",
            p: "Whether it’s a promotion, an anniversary or a vacation, we’re always saving our celebrations for a big event — " +
                "but what if you were the special occasion? And what if you decided to celebrate you today? Grey Goose, like us, " +
                "believes in living Victoriously – treating yourself in both the big and the small moments in life.  Don't wait for a special " +
                "occasion – you are the celebration. ",
        },
        b: {
            h: "The Toolkit",
            p: "Following Grey Goose 'Live Victoriously' campaign guidelines RockitLab developed a toolkit to help Grey Goose " +
                "customers celebrate their moments. We designed signature bars for Outdoor and Indoor activations together " +
                "with a set of furniture and branded accessories.",
        },
        c: {
            h: "Process",
            p: "For every bucket list activity, there’s a celebration with your name on it. The toolkit we created showcases the assets in both " +
                "clean studio environment and immersed in classic outdoor and indoor settings. Wood, metals and plastic fused together help " +
                "deliver a refreshed brand image, while preserving the authenticity of Grey Goose.",
        },
        d: {
            h: "Visual Language",
            p: "",
            items: [
                "Blue Mirrored Surfaces",
                "Engraved “Grey Goose” Pattern",
                "Diverse Greenery",
                "Steel Accents",
                "Lime Wash Wood",
                "Minimalism",
            ]
        },
    },
    next: {
        h: "Next Project",
        banner: {
            h: "Find Your Favorite",
            p: "Experience every corner of the world just the way you like it",
            img: imgNext,
            imgShort: imgNext,
            logo: logoGGVertical,
            fontColor: 'white',
            linkTo: ROUTES.PROJECTS_GOOSE_F
        },
    },
    media: {
        imgWide: [imgWide1, imgWide2, imgWide3, imgWide4, imgWide5, imgWide6],
        imgSquare: [imgSquare1, imgSquare2],
        imgSquareS: [imgSquareS1, imgSquareS2, imgSquareS3, imgSquareS4,
            imgSquareS5, imgSquareS6, imgSquareS7, imgSquareS8, imgSquareS9,
            imgSquareS10, imgSquareS11, imgSquareS12],
        momentsimgSquareSD: [],
        imgVertical: [imgVertical1, imgVertical2, imgVertical3, imgVertical4],
        video: []
    }
}
