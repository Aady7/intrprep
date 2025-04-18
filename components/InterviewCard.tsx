import dayjs from "dayjs";
import Image from "next/image";
import { getRandomInterviewCover } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import DisplayTechIcons from "./DisplayTechIcons";
const InterviewCard = ({
  interviewID,
  userID,
  role,
  techstack,
  type,
  createdAt,
}: InterviewCardProps) => {
  const feedback = null as Feedback | null;
  const noramalisedType = /mix/gi.test(type) ? "Mixed" : type;
  const formattedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now()
  ).format("MMM DD, YYYYY");

  return (
    <div className="w-[360px] max-sm:w-full card-border min-h-96">
      <div className="card-interview">
        <div>
          <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
            <p className="badge-text">{noramalisedType}</p>
          </div>
          <Image
            src={getRandomInterviewCover()}
            alt="interview cover"
            width={90}
            height={90}
          />
          <h3 className="mt-5 capitalize">{role} Interview</h3>
          <div className="flex flex-row gap-5 mt-3">
            <div className="flex flex-row gap-2 ">
              <Image
                src="/calendar.svg"
                alt="calender"
                width={22}
                height={22}
              />
              <p>{formattedDate}</p>
            </div>
            <div className="flex flex-row gap-2">
              <Image src="/star.svg" alt="star" width={22} height={22} />
              <p>{feedback?.totalScore || "---"}/100</p>
            </div>
          </div>
          <p className="line-clamp-2 mt-5 ">
            {feedback?.finalAssessment ||"You have not taken any interview yet.Take interviews to improve your skills."}
            </p>
        </div>
        <div className="flex flex-row justify-between">
            <DisplayTechIcons techstack={techstack} />
            <Button className="btn-primary" >
               <Link  href={feedback?`/interview/${interviewID}/feedback`:`/interview/${interviewID}/`}>
               {feedback?"View Feedback":"Take Interview"}
               </Link>
            </Button>

        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
