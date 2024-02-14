import StatsCard from "../../src/components/widgets/StatsCard";

export default {
    title: "Components/StatsCard",
    component: StatsCard,
    tags: ["autodocs"],
    args: {},
    argTypes: {
        cardType: {
            control: "select",
            options: ["revenue-counter", "revenue-progressBar"],
        },
        cardBg: {
            control: "color",
            description: "You can change custom background color as you need. default `#5c6bc0`",
        },
    },
};

export const Normal = {
    args: {
        cardType: "revenue-counter",
        cardBg: "#5c6bc0",
        symbolDirection: "left",
        symbol: "$",
        counter: 23569,
        isCounter: true,
        title: "Revenue",
        icon: "fa-solid fa-cart-shopping",
    },
};
