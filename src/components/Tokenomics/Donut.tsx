import { motion } from "framer-motion";

import type { TTokenomicsSliceAnimation } from "../../types";

interface IProps {
  setAnimations: React.Dispatch<React.SetStateAction<any>>;
}

const Donut: React.FC<IProps> = ({ setAnimations }) => {
  const hoverVariants = {
    hover: {
      scale: 0.8,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    unhover: {
      scale: 1,
    },
  };

  const hoverHandler = (proportion: string, state: boolean) => {
    setAnimations((prev: TTokenomicsSliceAnimation) => ({
      ...prev,
      [proportion]: state,
    }));
  };

  return (
    <motion.svg
      width="965"
      height="961"
      viewBox="0 0 965 961"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g filter="url(#filter0_d_454_7155)">
        <motion.g>
          <motion.path
            d="M21.0229 442.48C15.5128 442.105 10.7308 446.269 10.4749 451.786C5.19923 565.558 42.0309 677.429 114.131 765.897C186.232 854.366 288.369 913.014 400.866 930.804C406.321 931.667 411.364 927.823 412.109 922.351L437.626 734.865C438.371 729.392 434.533 724.372 429.094 723.413C369.165 712.841 314.893 681.07 276.309 633.726C237.724 586.382 217.558 526.816 219.296 465.987C219.454 460.466 215.312 455.693 209.802 455.319L21.0229 442.48Z"
            fill="#57DBA4"
            initial="unhover"
            variants={hoverVariants}
            whileHover="hover"
            transition={{ duration: 0.3 }}
            onHoverStart={() => hoverHandler("p2e_staking", true)}
            onHoverEnd={() => hoverHandler("p2e_staking", false)}
          />
        </motion.g>
        <motion.g>
          <motion.path
            d="M435.632 924.929C435.174 930.433 439.264 935.277 444.777 935.617C486.71 938.198 528.799 935.062 569.887 926.297C575.288 925.145 578.616 919.748 577.347 914.373L533.885 730.217C532.616 724.842 527.233 721.533 521.812 722.589C502.166 726.416 482.136 727.909 462.139 727.034C456.621 726.793 451.788 730.863 451.33 736.367L435.632 924.929Z"
            fill="#835C44"
            initial="unhover"
            variants={hoverVariants}
            whileHover="hover"
            transition={{ duration: 0.3 }}
            onHoverStart={() => hoverHandler("community", true)}
            onHoverEnd={() => hoverHandler("community", false)}
          />
        </motion.g>
        <motion.g>
          <motion.path
            d="M604.924 906.94C606.528 912.224 612.117 915.218 617.366 913.5C657.269 900.437 695.212 882.009 730.151 858.723C734.747 855.66 735.849 849.417 732.688 844.888L624.377 689.739C621.216 685.211 614.992 684.12 610.343 687.101C593.504 697.896 575.449 706.665 556.553 713.225C551.336 715.037 548.345 720.602 549.949 725.887L604.924 906.94Z"
            fill="#57C3DB"
            initial="unhover"
            variants={hoverVariants}
            whileHover="hover"
            transition={{ duration: 0.3 }}
            onHoverStart={() => hoverHandler("dex", true)}
            onHoverEnd={() => hoverHandler("dex", false)}
          />
        </motion.g>
        <motion.g>
          <motion.path
            d="M749.973 832.203C753.345 836.577 759.632 837.397 763.932 833.932C796.624 807.584 825.582 776.914 850.011 742.765C853.224 738.273 852.044 732.044 847.484 728.928L691.251 622.188C686.691 619.072 680.485 620.256 677.192 624.69C665.267 640.749 651.487 655.343 636.139 668.17C631.901 671.711 631.075 677.975 634.447 682.349L749.973 832.203Z"
            fill="#C0E13D"
            initial="unhover"
            variants={hoverVariants}
            whileHover="hover"
            transition={{ duration: 0.3 }}
            onHoverStart={() => hoverHandler("team", true)}
            onHoverEnd={() => hoverHandler("team", false)}
          />
        </motion.g>
        <motion.g>
          <motion.path
            d="M919.566 552.164C925.005 553.126 928.645 558.317 927.566 563.733C925.077 576.228 922.074 588.614 918.564 600.861C917.043 606.17 911.43 609.118 906.155 607.482L725.429 551.44C720.154 549.804 717.224 544.206 718.651 538.871C719.678 535.031 720.615 531.167 721.461 527.284C722.636 521.887 727.804 518.253 733.242 519.215L919.566 552.164Z"
            fill="#D9D9D9"
            initial="unhover"
            variants={hoverVariants}
            whileHover="hover"
            transition={{ duration: 0.3 }}
            onHoverStart={() => hoverHandler("marketing", true)}
            onHoverEnd={() => hoverHandler("marketing", false)}
          />
        </motion.g>
        <motion.g>
          <motion.path
            d="M897.714 632.167C902.886 634.103 905.519 639.871 903.472 645C895.148 665.85 885.319 686.068 874.063 705.493C871.294 710.271 865.132 711.762 860.414 708.891L698.784 610.515C694.066 607.643 692.588 601.501 695.271 596.673C699.789 588.547 703.857 580.179 707.457 571.607C709.596 566.515 715.34 563.883 720.512 565.82L897.714 632.167Z"
            fill="#FFB800"
            initial="unhover"
            variants={hoverVariants}
            whileHover="hover"
            transition={{ duration: 0.3 }}
            onHoverStart={() => hoverHandler("advisors", true)}
            onHoverEnd={() => hoverHandler("advisors", false)}
          />
        </motion.g>
        <motion.g>
          <motion.path
            d="M927.489 529.832C932.974 530.478 937.955 526.553 938.481 521.055C949.855 402.33 914.993 283.633 840.926 189.822C764.791 93.3917 653.468 31.1552 531.445 16.8042C409.423 2.45316 286.697 37.1631 190.267 113.298C96.4559 187.365 35.0065 294.735 18.5241 412.859C17.7609 418.329 21.6954 423.302 27.1804 423.947L215.1 446.048C220.585 446.694 225.535 442.764 226.395 437.309C236.332 374.296 269.653 317.184 319.912 277.503C372.793 235.752 440.093 216.717 507.008 224.587C573.923 232.457 634.971 266.586 676.722 319.467C716.403 369.726 735.564 433.01 730.61 496.609C730.181 502.115 734.084 507.086 739.569 507.731L927.489 529.832Z"
            fill="#6C4EE0"
            initial="unhover"
            variants={hoverVariants}
            whileHover="hover"
            transition={{ duration: 0.3 }}
            onHoverStart={() => hoverHandler("presale", true)}
            onHoverEnd={() => hoverHandler("presale", false)}
          />
        </motion.g>
      </motion.g>
      <defs>
        <filter
          id="filter0_d_454_7155"
          x="9.97754"
          y="13.6318"
          width="954.615"
          height="946.86"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="20" dy="20" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_454_7155"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_454_7155"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_454_7155"
          x="5.97754"
          y="442.456"
          width="435.741"
          height="496.469"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_454_7155"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_454_7155"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_454_7155"
          x="431.597"
          y="722.394"
          width="150.02"
          height="222.099"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_454_7155"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_454_7155"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_d_454_7155"
          x="545.516"
          y="685.432"
          width="192.971"
          height="236.554"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_454_7155"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_454_7155"
            result="shape"
          />
        </filter>
        <filter
          id="filter4_d_454_7155"
          x="628.361"
          y="620.44"
          width="227.465"
          height="223.644"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_454_7155"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_454_7155"
            result="shape"
          />
        </filter>
        <filter
          id="filter5_d_454_7155"
          x="714.292"
          y="519.061"
          width="217.464"
          height="96.873"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_454_7155"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_454_7155"
            result="shape"
          />
        </filter>
        <filter
          id="filter6_d_454_7155"
          x="689.941"
          y="565.183"
          width="218.227"
          height="153.167"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_454_7155"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_454_7155"
            result="shape"
          />
        </filter>
        <filter
          id="filter7_d_454_7155"
          x="14.4294"
          y="13.6318"
          width="930.163"
          height="524.27"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_454_7155"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_454_7155"
            result="shape"
          />
        </filter>
      </defs>
    </motion.svg>
  );
};
export { Donut };
