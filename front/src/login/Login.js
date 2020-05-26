import React, { Fragment } from 'react'
import { useHistory } from 'react-router'
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/core"
import { BsFillPeopleFill, BsBookmarkCheck } from 'react-icons/bs'

function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory()
  
  const advance = (e) => history.push('/game')

  return (
    <Fragment>
      <Button mr={2} onClick={onOpen} leftIcon={BsFillPeopleFill} variantColor="teal" variant="outline" size="lg" >
        <span>Login</span>
      </Button>

      {/* Login Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader m={3}>Login with your user :)</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Your Name</FormLabel>
              <Input placeholder="Your name..." />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>E-mail</FormLabel>
              <Input placeholder="Your e-mail..." />
            </FormControl>
          </ModalBody>
          
          <ModalFooter>
            <Button onClick={onClose} mr={2}>
              <span>Cancel</span>
            </Button>
            <Button variantColor="teal" mr={3} onClick={advance} leftIcon={BsBookmarkCheck} >
              <span>Login</span>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  )
}

export default Login