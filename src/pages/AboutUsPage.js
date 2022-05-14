import React from "react";
import Blog from "../components/layout/Blog";

const AboutUsPage = () => {
  return (
    <>
      <GiftingIntro></GiftingIntro>
      <Blog
        reverse={true}
        title={"Step 1: Pick Your Plant"}
        content={
          "From non-toxic plants for pet-friendly spaces to low-light tolerant plants for home offices, we have plants and planters that suit your unique needs."
        }
        url={
          "https://cdn.shopify.com/s/files/1/0150/6262/files/cream-lineup_720x.jpg?v=1622053587"
        }
      ></Blog>
      <Blog
        reverse={true}
        title={"Step 2: Tell Us Where To Ship"}
        content={
          "Shipping to multiple locations? We’ve got you covered. Complete the form to deliver greenery to all the addresses on your list."
        }
        url={
          "https://cdn.shopify.com/s/files/1/0150/6262/files/19126-01-394_v2_720x.jpg?v=1615990979"
        }
      ></Blog>
    </>
  );
};
const GiftingIntro = () => {
  return (
    <div className="w-full page-container p-10 mb-20">
      <h1 className="text-5xl font-semibold mb-10">
        With so many corporate gifting choices, why gift plants?
      </h1>
      <div className="grid grid-cols-3 gap-10">
        <GiftingIntroItem
          url={
            "https://cdn.shopify.com/s/files/1/0150/6262/files/Enjoy_Monthly_Guaranteed_180x.png?v=1634449912"
          }
          title={"Plants Are Made To Last"}
          content={
            "They’re a meaningful gift that continues to grow and provide beauty for many years to come. Unlike other gifts that eventually expire, live plants only get better with time."
          }
        ></GiftingIntroItem>
        <GiftingIntroItem
          url={
            "https://cdn.shopify.com/s/files/1/0150/6262/files/Choose_Your_Plan_180x.png?v=1634449912"
          }
          title={"Plants Are Always Inclusive"}
          content={
            "No need to worry about food allergies or merch sizes. And you don't have to be a plant aficionado to enjoy a plant. We recommend easy-care varieties that work for anyone’s space, from low-light to pet-friendly."
          }
        ></GiftingIntroItem>
        <GiftingIntroItem
          url={
            "https://cdn.shopify.com/s/files/1/0150/6262/files/Gift_a_Subscription_180x.png?v=1634449912"
          }
          title={"Plants Make Us Happier"}
          content={
            "They boost our spirits and enhance our environments. Studies show indoor plants can reduce mental fatigue and stress, and increase relaxation and self-esteem."
          }
        ></GiftingIntroItem>
      </div>
    </div>
  );
};
const GiftingIntroItem = ({ url, title, content }) => {
  return (
    <div className="flex flex-col">
      <img src={url} alt="" className="w-10 h-10 mb-5" />
      <h1 className="text-4xl font-semibold mb-5">{title}</h1>
      <p className="text-base mt-auto ">{content}</p>
    </div>
  );
};
export default AboutUsPage;
