"use client";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
// import FastfoodIcon from "@mui/icons-material/Fastfood";
// import LaptopMacIcon from "@mui/icons-material/LaptopMac";
// import HotelIcon from "@mui/icons-material/Hotel";
// import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import { AiOutlineLaptop } from "react-icons/ai";
import { BsBook } from "react-icons/bs";

const Education = () => {
  return (
    <div className="lg:max-w-6xl mx-auto">
      <div className="text-center mt-20">
        <h1 className="text-[45px] uppercase font-extrabold font-rubik opacity-5">
          resume
        </h1>
        <p className="uppercase -mt-12 font-rubik font-bold text-primary">
          Education
        </p>
      </div>
      <div className="mt-16 font-rubik">
        <Timeline position="alternate">
          <TimelineItem>
            {/* <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              9:30 am
            </TimelineOppositeContent> */}
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <BsBook />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              {/* <Typography variant="h6" component="span">
                Eat
              </Typography>
              <Typography>Because you need strength</Typography> */}
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              2013 — 2017
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                {/* <LaptopMacIcon /> */}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Bachelor Of Science In Computer Science & Information Technology
              </Typography>
              <Typography>
                I completed my bachelors in Soch college of IT which is located
                in Pokhara-11, Nepal. It was a wonderful journey studying in the
                college.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              2008 — 2012
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined">
                {/* <BiHotel /> */}
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Diploma In Computer Engineering
              </Typography>
              <Typography>
                I completed my diploma at Pokhara Engineering College located in
                Pokhara, Nepal.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              2007
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              <TimelineDot color="secondary">
                {/* <RepeatIcon /> */}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                High School
              </Typography>
              <Typography>
                I did my high school at Kaski Modernized Academy located in
                Chauthe, Nepal.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>

      {/* SKILLS  */}

      <div className="text-center mt-20">
        <h1 className="text-[45px] uppercase font-extrabold font-rubik opacity-5">
          experience
        </h1>
        <p className="uppercase -mt-12 font-rubik font-bold text-primary">
          Work
        </p>
      </div>
      <div className="mt-16 font-rubik">
        <Timeline position="alternate">
          <TimelineItem>
            {/* <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              9:30 am
            </TimelineOppositeContent> */}
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <BsBook />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              {/* <Typography variant="h6" component="span">
                Eat
              </Typography>
              <Typography>Because you need strength</Typography> */}
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              2020 — Present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                {/* <LaptopMacIcon /> */}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Front End Developer
              </Typography>
              <Typography>
                I am working as a front-end-developer in Pioneer Hub.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              2020 — present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined">
                {/* <BiHotel /> */}
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Part-Time Freelancer
              </Typography>
              <Typography>
                I am working as a part-time freelancer in freelancing platform
                like Upwork and Fiverr.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              2017 — 2020
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              <TimelineDot color="secondary">
                {/* <RepeatIcon /> */}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Computer Teacher
              </Typography>
              <Typography>
                I taught computer to high school students in Pokhara United for
                3 years. It helped me to build my communication skills and am
                able to explain complex technical concepts in a easy way.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default Education;
