import React, { useState } from "react";
import { SKILL_TABS, SKILLS } from "../utils/data";
import Tabs from "../components/Tabs";
import SkillCard from "../components/SkillCard";
import { motion } from "framer-motion";

const TechnicalProficiency = () => {
    const [tabData, setTabData] = useState(SKILLS);
    const [activeTab, setActiveTab] = useState("all");
    const handleTabValueChange = (value) => {
      if(value === "all") {
        setTabData(SKILLS);
        setActiveTab("all");
      } else {
        const updateList = SKILLS.filter((item) => item.type === value);
        setTabData(updateList);
        setActiveTab(value);
        }
      };
  return (
    <section id="skills" className=" bg-background mt-20 container mx-auto max-w-[1200px]">
      <div className=" p-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className=" section-title">Technical Proficiency</h4>
          <p className="text-sm text-center mt-4 leading-6">
            Technical proficiency encompasses expertise in various tools,
            programming languages, and software, enabling efficient
            problem-solving, development, and system optimization.
          </p>
        </div>
      </div>

      <Tabs 
      tabList={SKILL_TABS}
      activeTab={activeTab}
      onChange={handleTabValueChange}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[430px]">
      {
        tabData.map((item, index) => (
          <motion.div 
          key={item.id}
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.4, delay: index * 0.1}}
           >
            <SkillCard 
            icon={<item.icon className="w-6 h-6 text-primary"/>}
            skillName={item.skill}
            progress={item.progress}
            description={item.description}
            />
          </motion.div>
        ))
      }
      </div>
    </section>
  );
};

export default TechnicalProficiency;
