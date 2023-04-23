import classnames from "classnames";
import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";
import { BsGrid } from "react-icons/bs";
import { TfiLayoutSliderAlt } from "react-icons/tfi";

export type ViewType = "list" | "gallery";

const ViewToggleIcon = ({
  icon,
  isToggled,
}: {
  icon: { value: IconType };
  isToggled: boolean;
}) => {
  return (
    <icon.value
      className={classnames(
        "h-5 w-5 transition-all duration-500 ease-in-out",
        isToggled ? "text-black" : "text-white/50 hover:text-white"
      )}
    />
  );
};

const ViewToggle = ({
  view,
  setView,
}: {
  view: ViewType;
  setView: Dispatch<SetStateAction<ViewType>>;
}) => {
  return (
    <div className="flex gap-8 rounded-full bg-black/30 backdrop-blur-lg px-5 py-2 w-28 h-11 relative">
      <div
        className={classnames(
          "bg-white rounded-full h-7 w-12 absolute top-2 z-0 transition-all ease-in-out duration-500",
          view === "gallery" ? "-translate-x-3" : "translate-x-9"
        )}
      ></div>
      <button className="z-10" onClick={() => setView("gallery")}>
        <ViewToggleIcon
          icon={{ value: BsGrid }}
          isToggled={view === "gallery"}
        />
      </button>
      <button className="z-10" onClick={() => setView("list")}>
        <ViewToggleIcon
          icon={{ value: TfiLayoutSliderAlt }}
          isToggled={view === "list"}
        />
      </button>
    </div>
  );
};

export default ViewToggle;
