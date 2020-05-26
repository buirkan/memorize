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
  Input,
} from "@chakra-ui/core"
import { BsPeople, BsFillPersonCheckFill } from 'react-icons/bs'
import { useHistory } from 'react-router'

function RegisterUser() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const history = useHistory()

  const createUser = () => { 
    // Create user on db and push to home page
    history.push('/game')
  }

  return (
    <Fragment>
      <Button ml={2} onClick={onOpen} rightIcon={BsPeople} variantColor="pink" variant="solid" size="lg">
        <span>Register</span>
      </Button>
      {/* Register Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader m={5}>Welcome! We need some informations to create your user in our system</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input placeholder="Full name..." />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Your mail</FormLabel>
              <Input placeholder="E-mail..." />
            </FormControl>
          </ModalBody>
          
          <ModalFooter>
            <Button onClick={onClose} mr={2}>
              <span>Cancel</span>
            </Button>
            <Button variantColor="pink" mr={3} onClick={createUser} leftIcon={BsFillPersonCheckFill}>
              <span>Register</span>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  )
}

export default RegisterUser