import React from 'react'
import { Center ,Flex ,Text, Box} from "@chakra-ui/react";
import Link from 'next/link';

const Header = () => {
    return (
        <Center w={"100vw"} gap={"227px"} padding={"16px 0"} boxShadow={"1px 1px 1px 1px rgba(0,0,0,0.25)"} position={"fixed"} bgColor={"white"} zIndex={"100"}>
        <Flex as={"input"} w={"466px"} h={"38px"} border={"1px solid #000"}></Flex>
        <Flex gap={"114px"}>
          <Center gap={"32px"}>
            <Link href={"./"}>
                <Text>HOME</Text>
            </Link>
            <Link href={"profile"}>
                <Text>分析グラフ</Text>
            </Link>
            <Link href={"./"}>
                <Text>チャット</Text>
            </Link>
          </Center>
          <Link href={"profile"}>
            <Center gap={"16px"}>
                <Box as="img" w={"38px"} h={"38px"} borderRadius={"99px"} bgColor={"#000"}></Box>
                <Text>下河寛宗</Text>
            </Center>
          </Link>
        </Flex>
      </Center>
    )
}

export default Header