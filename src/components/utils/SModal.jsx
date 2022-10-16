import {
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

function SModal({ heading, text, children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(heading);
  return (
    <>
      <Box cursor="pointer" onClick={onOpen}>
        {children}
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#000" p={8}>
          <ModalHeader fontSize="1.5rem" className="txt-red">
            {heading}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{text}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default SModal;
