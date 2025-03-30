"use client"
import {
  faPaintBrush,
  faCamera,
  faConciergeBell,
  faMusic,
  faBirthdayCake,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons"; // تأكد من أنك قمت باستيراد الأيقونات
import { useState } from "react";
import ServicesBox from "./ServicesBox";

export default function ServicesList() {
  const [data, setData] = useState([
    {
      title: "ديكورات متغيرة",
      description:
        "لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد. لقد كان له كبير في ستينيات القرن الماضي مع إصدار أوراق Letraset التي تحتوي.",
      icon: faPaintBrush,
    },
    {
      title: "مصورين الفوتوغراف",
      description:
        "لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد. لقد كان له كبير في ستينيات القرن الماضي مع إصدار أوراق Letraset التي تحتوي.",
      icon: faCamera,
    },
    {
      title: "منظمين الحفلات",
      description:
        "لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد. لقد كان له كبير في ستينيات القرن الماضي مع إصدار أوراق Letraset التي تحتوي.",
      icon: faConciergeBell,
    },
    {
      title: "دى جى",
      description:
        "لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد. لقد كان له كبير في ستينيات القرن الماضي مع إصدار أوراق Letraset التي تحتوي.",
      icon: faMusic,
    },
    {
      title: "تصاميم كيك الزواج",
      description:
        "لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد. لقد كان له كبير في ستينيات القرن الماضي مع إصدار أوراق Letraset التي تحتوي.",
      icon: faBirthdayCake,
    },
    {
      title: "بوفيه",
      description:
        "لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد. لقد كان له كبير في ستينيات القرن الماضي مع إصدار أوراق Letraset التي تحتوي.",
      icon: faUtensils,
    },
  ]);

  return (
    <div className=" flex items-center justify-evenly flex-wrap">
      {data.map((ele, index) => (
        <ServicesBox key={index} ele={ele} />
      ))}
    </div>
  );
}
