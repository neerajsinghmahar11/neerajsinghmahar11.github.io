import React from "react";
import Githubcalendar from "react-github-calendar";
import { ThemeContext } from "../../Context/theme";
import { Image,Container,Center } from "@chakra-ui/react";

export const Github = () => {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc"
  };
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + colourTheme} data-aos="fade-right">
        <h2 className="section__title different">
          Days I <span className="different"> Code</span>
        </h2>
        <Githubcalendar
          class="react-activity-calendar"
          username="neerajsinghmahar11"
          blockSize={15}
          blockMargin={5}
          theme={themename}
          fontSize={16}
        />
        <Container maxW={['full','full','60%','full','full']}  gap='10px' m='auto' >
            <Center w={"auto"} gap='10px'display={['block','block','block','flex','flex']}>

        <Image   id="github-streak-stats" src='https://github-readme-streak-stats.herokuapp.com?user=neerajsinghmahar11&theme=github-dark&border_radius=20'/>
        </Center>
        <Center>
        <Image id="github-stats-card" src='https://github-readme-stats.vercel.app/api?username=neerajsinghmahar11&show_icons=true&theme=dark&border_radius=20'/>
            </Center>


            <Center maxW="90%"  margin='auto'padding='0px'  marginTop='50px'>
        <Image id="github-top-langs" src='https://github-readme-stats.vercel.app/api/top-langs/?username=neerajsinghmahar11&layout=compact&border_radius=20'/>
            </Center>
        </Container>
      </div>
    </>
  );
};
