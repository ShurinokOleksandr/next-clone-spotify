'use client'
import {Flex,Text} from "@chakra-ui/react";
import {TbPlaylist} from "react-icons/tb";
import {Icon} from "@chakra-ui/icon";
import {AiOutlinePlus} from "react-icons/ai";
import {useUser} from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";

const Library = () => {

    const {user} = useUser()
    const authModal = useAuthModal()
    const uploadModal = useUploadModal()

    const onClick = () => {
        if(!user){
             return authModal.onOpen()
        }
        return uploadModal.onOpen()
    }
    return (
        <Flex direction={'column'}>
            <Flex  align={'center'} justify={'space-between'} px={5} pt={4}>
                <Flex display={'inline-flex'} align={'center'} columnGap={2}>
                    <Icon as={TbPlaylist} boxSize={26}/>
                    <Text>
                        Your Library
                    </Text>
                </Flex>
                <Icon
                    cursor={'pointer'}
                    _hover={{color:'#408d86'}}
                    onClick={onClick}
                    as={AiOutlinePlus}
                    boxSize={26}
                />
            </Flex>
            <Flex direction={'column'} rowGap={2} mt={4} px={3}>
                List of Songs
            </Flex>
        </Flex>
    );
};

export default Library;