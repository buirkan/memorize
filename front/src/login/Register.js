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
import { BsPeople } from 'react-icons/bs'

function RegisterUser() {
  return (
    <Fragment>
      <Button rightIcon={BsPeople} variantColor="pink" variant="solid" size="lg">
        <span>Register</span>
      </Button>
      {/* Register Modal */}
    </Fragment>
  )
}

export default RegisterUser