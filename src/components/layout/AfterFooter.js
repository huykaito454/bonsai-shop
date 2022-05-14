import React from "react";

const AfterFooter = () => {
  return (
    <section className="after-footer page-container w-full mb-10 mt-20">
      <h1 className="text-5xl font-semibold mb-4">
        To be human is to experience biophilia.
      </h1>
      <span className="text-3xl">- That craving for nature, in all forms</span>
      <div className="flex items-center justify-between my-16 transition-all">
        <div className="shop-online w-[32%]">
          <img
            src="https://cdn.shopify.com/s/files/1/0150/6262/files/Shop_Online_Icon_Retina_180x.png?v=1626895930"
            alt=""
            className="w-20 h-20 object-cover"
          />
          <h2 className="text-4xl font-semibold my-5 hover:text-primary cursor-pointer">
            Shop Online
          </h2>
          <p>
            Enjoy plants, pots, botanicals and more delivered to your door. Our
            plant care library and virtual workshops provide support and
            encouragement to all plant parents
          </p>
        </div>
        <div className="subscribe w-[32%]">
          <img
            src="https://cdn.shopify.com/s/files/1/0150/6262/files/Subscriptions_Icon_Retina_180x.png?v=1626895946"
            alt=""
            className="w-20 h-20 object-cover"
          />
          <h2 className="text-4xl font-semibold my-5 hover:text-primary cursor-pointer">
            Subscribe
          </h2>
          <p>
            Look forward to a new plant every month. We choose for you from best
            sellers and subscriber-only plants, while you enjoy free shipping
            and other community perks.
          </p>
        </div>
        <div className="in-store w-[32%]">
          <img
            src="https://cdn.shopify.com/s/files/1/0150/6262/files/Shop_In_store_Icon_Retina_180x.png?v=1626895956"
            alt=""
            className="w-20 h-20 object-cover"
          />
          <h2 className="text-4xl font-semibold my-5 hover:text-primary cursor-pointer">
            Shop In-Store
          </h2>
          <p>
            Visit our stores in New York, L.A., San Francisco and Chicago to
            explore your online favorites and discover specialty plants from
            local growers.
          </p>
        </div>
      </div>
      <div className="welcome page-container w-full bg-secondary flex justify-between">
        <div className="welcome-content p-14 flex flex-col justify-between w-[40%]">
          <h1 className="text-5xl font-semibold my-5">
            Welcome to our community
          </h1>
          <p>
            Shopping with The Sill means you’re supported every step of your
            plant parenthood journey. Learn more about our Reward Program.
          </p>
          <div className="flex w-full justify-start">
            <div className="button w-[40%] text-center cursor-pointer mr-5">
              Join Now
            </div>
            <div className="button w-[40%] text-center cursor-pointer bg-white text-primary">
              Learn More
            </div>
          </div>
        </div>
        <div className="w-[40%]">
          <img
            src="https://64.media.tumblr.com/d307cd3ea966d5bb07cbfa34bd41918b/76ed04c015feac48-ef/s640x960/6df28910440598dfe58c173a4acc5931519fee4a.jpg"
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AfterFooter;
