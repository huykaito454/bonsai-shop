import React from "react";
import Blog from "../components/layout/Blog";

const AboutUsPage = () => {
  return (
    <>
      <div className="page-container mb-10 border-t-2 w-full"></div>
      <Blog
        reverse={true}
        title={"Pick Your Plant"}
        content={
          "From non-toxic plants for pet-friendly spaces to low-light tolerant plants for home offices, we have plants and planters that suit your unique needs."
        }
        url={
          "https://cdn.shopify.com/s/files/1/0150/6262/files/cream-lineup_720x.jpg?v=1622053587"
        }
      ></Blog>
      <YourTeam></YourTeam>
    </>
  );
};
const YourTeam = () => {
  return (
    <div className="w-full page-container mb-20 px-10">
      <h1 className="text-3xl mb-10 font-semibold text-primary uppercase text-center">
        Your team
      </h1>
      <div className="grid grid-cols-3 gap-8 px-60">
        <Author
          name={"Nguyen Trong Huy"}
          url={
            "https://64.media.tumblr.com/2b5ec39201589b9f7a4dca4e8c6c45f7/929b46ee2567d435-60/s2048x3072/8bc3955f51d1c1f203509f7cd5a3530f9ec7a141.jpg"
          }
        ></Author>
        <Author
          name={"Pham Thanh Loi"}
          url={
            "https://64.media.tumblr.com/6304bada43578595ce3ee41d7b2aa61e/929b46ee2567d435-32/s1280x1920/678d38ade6e572bbf876aa98898e42f879889e87.jpg"
          }
        ></Author>
        <Author
          name={"Nguyen Minh Nhat"}
          url={
            "https://64.media.tumblr.com/60cef3e5b0d52f3f5572c2dee2e93aa2/2cfce9ca1e40c65f-90/s1280x1920/5fd29f20d682089943d076a2f4608800e49cd06d.jpg"
          }
        ></Author>
      </div>
    </div>
  );
};
const Author = ({ name, url }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full overflow-hidden mb-2">
        <img src={url} alt="" className="w-full object-cover " />
      </div>
      <span className="text-center font-semibold text-xl">{name}</span>
      <span className="text-center  text-base">Developer</span>
    </div>
  );
};
export default AboutUsPage;
