import React, { Fragment } from 'react'
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
import { BsFillPeopleFill } from 'react-icons/bs'

function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const advance = (e) => { }

  return (
    <Fragment>
      <Button onClick={onOpen} leftIcon={BsFillPeopleFill} variantColor="teal" variant="outline" size="lg" >
        <span>Login</span>
      </Button>

      {/* Login Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login with your user :)</ModalHeader>
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
            <Button variantColor="teal" mr={3} onClick={advance}>
              <span>Login</span>
            </Button>
            <Button onClick={onClose}>
              <span>Cancel</span>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  )
}

export default Login