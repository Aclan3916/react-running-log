import {
    Box,
    Button,
    Input,
    VStack,
    Container,
    Heading,
    Text,
    Stack,
    // RatingGroup
} from "@chakra-ui/react"
import { useState } from "react"
// import { createRun } from '../lib/api'
import { useNavigate } from 'react-router-dom'

interface RunLogForm {
    run_title: string
    run_location: string
    distance: string
    elapsed_time: string
    working_time: string
    pace: string
    rating: number
}

const RunLog = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState<RunLogForm>({
        run_title: '',
        run_location: '',
        distance: '',
        elapsed_time: '',
        working_time: '',
        pace: '',
        rating: 3
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // try {
        //     await createRun({
        //         ...formData,
        //         created_at: new Date().toISOString()
        //     })
        //     navigate('/activities')
        // } catch (error) {
        //     console.error('Error creating run:', error)
        // }
    }
    // const [value, setValue] = useState(3)
    return (
        <Container maxW="container.sm" py={8}>
            <VStack gap={8}>
                <Heading>Track the Miles, Own the Journey</Heading>
                <Box as="form" w="100%" onSubmit={handleSubmit}>
                    <Stack gap={6}>
                        <Box as="fieldset" borderWidth="1px" rounded="lg" p={4}>
                            <Text as="legend" fontSize="lg" fontWeight="medium" px={2}>
                                Run Details
                            </Text>
                            <VStack gap={4} mt={4}>
                                <Box w="100%">
                                    <Text mb={2}>Run Name</Text>
                                    <Input
                                        name="run_title"
                                        value={formData.run_title}
                                        onChange={handleChange}
                                        placeholder="Morning Run"
                                        required
                                    />
                                </Box>
                                <Box w="100%">
                                    <Text mb={2}>Location</Text>
                                    <Input
                                        name="run_location"
                                        value={formData.run_location}
                                        onChange={handleChange}
                                        placeholder="Central Park"
                                        required
                                    />
                                </Box>
                            </VStack>
                        </Box>

                        <Box as="fieldset" borderWidth="1px" rounded="lg" p={4}>
                            <Text as="legend" fontSize="lg" fontWeight="medium" px={2}>
                                Distance and Time
                            </Text>
                            <VStack gap={4} mt={4}>
                                <Box w="100%">
                                    <Text mb={2}>Distance (miles)</Text>
                                    <Input
                                        name="distance"
                                        type="number"
                                        step="0.01"
                                        value={formData.distance}
                                        onChange={handleChange}
                                        placeholder="5.0"
                                        required
                                    />
                                </Box>
                                <Box w="100%">
                                    <Text mb={2}>Elapsed Time (minutes)</Text>
                                    <Input
                                        name="elapsed_time"
                                        type="number"
                                        value={formData.elapsed_time}
                                        onChange={handleChange}
                                        placeholder="30"
                                        required
                                    />
                                </Box>
                                <Box w="100%">
                                    <Text mb={2}>Working Time (minutes)</Text>
                                    <Input
                                        name="working_time"
                                        type="number"
                                        value={formData.working_time}
                                        onChange={handleChange}
                                        placeholder="25"
                                        required
                                    />
                                </Box>
                                <Box w="100%">
                                    <Text mb={2}>Pace (min/mile)</Text>
                                    <Input
                                        name="pace"
                                        type="number"
                                        step="0.01"
                                        value={formData.pace}
                                        onChange={handleChange}
                                        placeholder="8:30"
                                        required
                                    />
                                </Box>
                            </VStack>
                        </Box>

                        {/* <Box as="fieldset" borderWidth="1px" rounded="lg" p={4}>
                            <Text as="legend" fontSize="lg" fontWeight="medium" px={2}>
                                Rating
                            </Text>
                            <Box p={4}>
                            <RatingGroup.Root
                                     count={5}
                                    value={formData.rating}
                                    onValueChange={(e) => setValue(e.value)}
                                        >
                            <RatingGroup.HiddenInput />
                            <RatingGroup.Control />
                            </RatingGroup.Root>
                            </Box>
                        </Box> */}

                        <Button
                            type="submit"
                            colorScheme="gray"
                            width="100%"
                            size="lg"
                        >
                            Log Run
                        </Button>
                    </Stack>
                </Box>
            </VStack>
        </Container>
    )
}

export default RunLog