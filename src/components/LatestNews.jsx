import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3 rounded">
      <p className="text-base-100 bg-secondary px-3 py-2 rounded">Latest</p>

      <Marquee className="cursor-pointer hover:font-semibold" pauseOnHover={true}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eos, quaerat similique doloribus reiciendis exercitationem! Rerum magnam sequi non aspernatur accusamus, cumque, adipisci est quibusdam dolorum nisi error dicta exercitationem ipsum esse. Commodi, doloremque dolorem. Ea totam, porro quae sunt dolorem sequi autem ut temporibus ad aspernatur earum dolorum nostrum?
      </Marquee>
    </div>
  );
};

export default LatestNews;
