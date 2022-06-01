import React from "react";

const Service = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[250px] bg-base-200 px-8 py-8 text-center gap-4 rounded-md">
      <img
        class="mask mask-hexagon hover:mask-hexagon-2 transform duration-1000 w-24"
        src="https://api.lorem.space/image/shoes?w=160&h=160"
      />
      <h3 className="text-lg">Hello</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
};

export default Service;
