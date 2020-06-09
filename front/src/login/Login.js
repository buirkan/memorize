import React, { useState, Fragment } from 'react'
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
} from '@chakra-ui/core'
import api from '../services/api'
import { BsFillPeopleFill, BsBookmarkCheck } from 'react-icons/bs'

function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [mail, updateMail] = useState('')
  const history = useHistory()

  const advance = () => {
    const data = {
      emailUser: mail
    }

    // Logon user
    api.post('login', data)
      .then(response => {
        console.log(`User logged in - ${response.data.user?.id}`)
        history.push('/game')
      })
      .catch(error => alert(`Error on login. \nError: ${error}`))
  }

  return (
    <Fragment>
      <Button mr={2} onClick={onOpen} leftIcon={BsFillPeopleFill} variantColor="teal" variant="outline" size="lg" >
        <span>Login</span>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader m={3}>Login with your user :)</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>E-mail</FormLabel>
              <Input placeholder="Your e-mail..." onChange={(e) => updateMail(e.target.value)} />
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