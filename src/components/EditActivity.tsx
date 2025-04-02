import {
    Box,
    Container,
    VStack,
    Input,
    Button,
    Stack,
    Text
  } from '@chakra-ui/react'
  import { useState, useEffect } from 'react'
  import { useParams, useNavigate } from 'react-router-dom'
  import { fetchRun, updateRun } from '../lib/api'
  
  interface RunActivity {
      id: string
      run_title: string     
      run_location: string   
      distance: string
      elapsed_time: string
      working_time: string
      pace: string
      rating: number
      created_at: string    
    }
  
  const EditActivity = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [activity, setActivity] = useState<RunActivity | null>(null)
  
    useEffect(() => {
      const loadActivity = async () => {
        if (id) {
          try {
            console.log('Loading activity with id:', id)
            const data = await fetchRun(id)
            console.log('Loaded activity:', data)
            setActivity(data)
          } catch (error) {
            console.error('Failed to load activity:', error)
            navigate('/activities')
          }
        }
      }
      loadActivity()
    }, [id, navigate])
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      if (!activity || !id) return
  
      try {
        console.log('Updating activity:', activity)
        await updateRun(id, {
          run_title: activity.run_title,
          run_location: activity.run_location,
          distance: activity.distance,
          elapsed_time: activity.elapsed_time,
          working_time: activity.working_time,
          pace: activity.pace,
          rating: activity.rating
        })
        navigate('/activities')
      } catch (error) {
        console.error('Failed to update activity:', error)
      }
    }
  
    if (!activity) return <Container maxW="container.md" py={8}>Loading...</Container>
  
    return (
      <Container maxW="container.sm" py={8}>
        <VStack gap={8}>
          <Box as="form" w="100%" onSubmit={handleSubmit}>
            <Stack gap={6}>
              <Box as="fieldset" borderWidth="1px" rounded="lg" p={4}>
                <Text as="legend" fontSize="lg" fontWeight="medium" px={2}>
                  Basic Information
                </Text>
                <VStack gap={4} mt={4}>
                  <Box w="100%">
                    <Text mb={2}>Run Name</Text>
                    <Input
                      value={activity.run_title}
                      onChange={(e) => setActivity({ ...activity, run_title: e.target.value })}
                      placeholder="Morning Run"
                    />
                  </Box>
                  <Box w="100%">
                    <Text mb={2}>Location</Text>
                    <Input
                      value={activity.run_location}
                      onChange={(e) => setActivity({ ...activity, run_location: e.target.value })}
                      placeholder="Central Park"
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
                      type="number"
                      step="0.01"
                      value={activity.distance}
                      onChange={(e) => setActivity({ ...activity, distance: e.target.value })}
                      placeholder="5.0"
                    />
                  </Box>
                  <Box w="100%">
                    <Text mb={2}>Elapsed Time (minutes)</Text>
                    <Input
                      type="number"
                      value={activity.elapsed_time}
                      onChange={(e) => setActivity({ ...activity, elapsed_time: e.target.value })}
                      placeholder="45"
                    />
                  </Box>
                  <Box w="100%">
                    <Text mb={2}>Working Time (minutes)</Text>
                    <Input
                      type="number"
                      value={activity.working_time}
                      onChange={(e) => setActivity({ ...activity, working_time: e.target.value })}
                      placeholder="42"
                    />
                  </Box>
                </VStack>
              </Box>
  
              <Button type="submit" colorScheme="gray" size="lg" width="100%">
                Save Changes
              </Button>
            </Stack>
          </Box>
        </VStack>
      </Container>
    )
  }
  
  export default EditActivity