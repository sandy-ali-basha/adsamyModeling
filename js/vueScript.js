const { createApp, ref } = Vue;

createApp({
  setup() {
    const message = ref("Hello vue!");
    return {
      message,
    };
  },
  data() {
    return {
      items: [
        { image: "./imgs/image11.png", text: "Item 11" },
        { image: "./imgs/image10.png", text: "Item 10" },
        { image: "./imgs/image12.png", text: "Item 12" },
        { image: "./imgs/image8.png", text: "Item 8" },
        { image: "./imgs/image7.png", text: "Item 7" },
        { image: "./imgs/image6.png", text: "Item 6" },
        { image: "./imgs/image5.png", text: "Item 5" },
        { image: "./imgs/image4.png", text: "Item 4" },
        { image: "./imgs/image3.png", text: "Item 3" },
        { image: "./imgs/image2.png", text: "Item 2" },
        { image: "./imgs/image1.png", text: "Item 1" },
        { image: "./imgs/image.png", text: "Item " },
      ],
      TopModels: [
        { image: "./imgs/image11.png", text: "Item 11" },
        { image: "./imgs/image10.png", text: "Item 10" },
        { image: "./imgs/image12.png", text: "Item 12" },
        { image: "./imgs/image8.png", text: "Item 8" },
        { image: "./imgs/image7.png", text: "Item 7" },
        { image: "./imgs/image6.png", text: "Item 6" },
        { image: "./imgs/image5.png", text: "Item 5" },
        { image: "./imgs/image4.png", text: "Item 4" },
        { image: "./imgs/image3.png", text: "Item 3" },
        { image: "./imgs/image2.png", text: "Item 2" },
        { image: "./imgs/image1.png", text: "Item 1" },
        { image: "./imgs/image.png", text: "Item " },
      ],
      swiperItems: [
        {
          image: "./imgs/image12.png",
          title: "Dana Johnson",
          text: " One of the best modeling agencies in Dubai, Very professional agency with high profile clients, they know how to treat customers. I highly recommend them.",
        },
        {
          image: "./imgs/image1.png",
          title: "Dana Johnson",
          text: " One of the best modeling agencies in Dubai, Very professional agency with high profile clients, they know how to treat customers. I highly recommend them.",
        },
      ],
      HighRatedModels: [
        {
          image: "./imgs/topModals/image0.jpeg",
          title: "Natacha",
        },
        {
          image: "./imgs/topModals/image1.jpeg",
          title: "Selim",
        },
        {
          image: "./imgs/topModals/image0.jpeg",
          title: "Natacha",
        },
        {
          image: "./imgs/topModals/image1.jpeg",
          title: "Selim",
        },
        {
          image: "./imgs/topModals/image0.jpeg",
          title: "Natacha",
        },
        {
          image: "./imgs/topModals/image1.jpeg",
          title: "Selim",
        },
        {
          image: "./imgs/topModals/image0.jpeg",
          title: "Natacha",
        },
        {
          image: "./imgs/topModals/image1.jpeg",
          title: "Selim",
        },
      ],
    };
  },
}).mount("#app");
