import React, { Fragment, useState } from 'react'
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
  Stack,
  Box,
} from '@chakra-ui/core'
import api from '../services/api'
import { BsPeople, BsFillPersonCheckFill } from 'react-icons/bs'
import { FcOnlineSupport } from 'react-icons/fc'
import { useHistory } from 'react-router'

function RegisterUser() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [fullName, setUsername] = useState('')
  const [mail, setMail] = useState('')
  const history = useHistory()

  const createUser = () => {
    const data = {
      userName: fullName,
      userEmail: mail
    }

    api.post('createUser', data)
      .then(response => {
        let userId = response.data?.id

        alert('User created with success')

        console.log(`User id created: ${userId}`)
        localStorage.setItem('userId', userId)
        
        history.push('/game')
      })
      .catch(error => alert(`User register failed - ${error}`))
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
          <ModalHeader m={5}>
            <Stack isInline>
              <h2>Welcome! Register now</h2>
              <Box size="30px" as={FcOnlineSupport} ml={3} />
            </Stack>
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Full name</FormLabel>
              <Input placeholder="Full name..." onChange={(e) => setUsername(e.target.value)} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Your mail</FormLabel>
              <Input placeholder="E-mail..." onChange={(e) => setMail(e.target.value)} />
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