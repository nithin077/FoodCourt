import { Outlet } from "react-router";
import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="p-2 m-4 border border-black shadow-lg">
      <h2 className="font-bold text-2xl">{title}</h2>
      <button
        className="cursor-pointer underline"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        <span className="text-lg">{isVisible ? "Hide" : "Show"}</span>
      </button>

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const AboutComponent = () => {
  const [visibleSection, setvisibleSection] = useState("about");
  return (
    <div className="about-us">
      <h1 className="m-4 font-bold text-xl">About Us</h1>
      <Section
        title={"About"}
        description={
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() =>
          setvisibleSection(visibleSection === "about" ? "" : "about")
        }
      />

      <Section
        title={"Career"}
        description={
          "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat"
        }
        isVisible={visibleSection === "career"}
        setIsVisible={() =>
          setvisibleSection(visibleSection === "career" ? "" : "career")
        }
      />

      <Section
        title={"Team"}
        description={
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() =>
          setvisibleSection(visibleSection === "team" ? "" : "team")
        }
      />
      <Outlet />
      {/* other way <Profile /> */}
    </div>
  );
};

export default AboutComponent;
