import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import { ReactComponent as WorkIcon } from "./work.svg";

function App() {
  return (
    <>
      <VerticalTimeline className="mx-2">
        <VerticalTimelineElement
          className={`vertical-timeline-element--work`}
          contentStyle={{ background: "rgb(217 249 157)", color: "#000" }} //box ke andar ka color and text ka color
          contentArrowStyle={{ borderRight: "7px solid  rgb(217 249 157)" }} //arraw ka color
          date="2011 - present"
          iconStyle={{ background: "rgb(217 249 100)", color: "#000" }} //gol ka color and andar ka color
          // icon={<WorkIcon />} //icon
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className={`vertical-timeline-element--work`}
          contentStyle={{ background: "rgb(217 249 157)", color: "#000" }} //box ke andar ka color and text ka color
          contentArrowStyle={{ borderRight: "7px solid  rgb(217 249 157)" }} //arraw ka color
          date="2011 - present"
          iconStyle={{ background: "rgb(217 249 100)", color: "#000" }} //gol ka color and andar ka color
          // icon={<WorkIcon />} //icon
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className={`vertical-timeline-element--work`}
          contentStyle={{ background: "rgb(217 249 157)", color: "#000" }} //box ke andar ka color and text ka color
          contentArrowStyle={{ borderRight: "7px solid  rgb(217 249 157)" }} //arraw ka color
          date="2011 - present"
          iconStyle={{ background: "rgb(217 249 100)", color: "#000" }} //gol ka color and andar ka color
          // icon={<WorkIcon />} //icon
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className={`vertical-timeline-element--work`}
          contentStyle={{ background: "rgb(217 249 157)", color: "#000" }} //box ke andar ka color and text ka color
          contentArrowStyle={{ borderRight: "7px solid  rgb(217 249 157)" }} //arraw ka color
          date="2011 - present"
          iconStyle={{ background: "rgb(217 249 100)", color: "#000" }} //gol ka color and andar ka color
          // icon={<WorkIcon />} //icon
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className={`vertical-timeline-element--work`}
          contentStyle={{ background: "rgb(217 249 157)", color: "#000" }} //box ke andar ka color and text ka color
          contentArrowStyle={{ borderRight: "7px solid  rgb(217 249 157)" }} //arraw ka color
          date="2011 - present"
          iconStyle={{ background: "rgb(217 249 100)", color: "#000" }} //gol ka color and andar ka color
          // icon={<WorkIcon />} //icon
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}

export default App;
