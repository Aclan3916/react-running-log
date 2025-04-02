import { 
    Box, 
    Container, 
    VStack, 
    Heading, 
    Text, 
    HStack, 
    Badge, 
    IconButton
  } from '@chakra-ui/react'
  import { CiEdit } from "react-icons/ci"
  import { RiDeleteBinLine } from "react-icons/ri"
  import { useEffect, useState } from 'react'
  import { fetchRuns, deleteRun } from '../lib/api'
  import { useNavigate } from 'react-router-dom'
  import supabase from '../lib/supabase'
  
  interface RunActivity {
    id: string | number 
    run_title: string
    run_location: string
    distance: string
    elapsed_time: string
    working_time: string
    pace: string
    rating: number
    created_at: string
  }
  
  const Activities = () => {
//     // Add this line at the start of your component
    (window as any).supabase = supabase;
  
    const [activities, setActivities] = useState<RunActivity[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
  
    useEffect(() => {
      const loadActivities = async () => {
        setIsLoading(true)
        try {
          const data = await fetchRuns()
          setActivities(data)
        } catch (err) {
          console.error('Failed to load activities:', err)
        }
        setIsLoading(false)
      }
      loadActivities()
    }, [])
  
    const handleDelete = async (id: string | number) => {
      try {
        await deleteRun(String(id))  // Convert ID to string before passing to deleteRun
        setActivities(activities.filter(activity => String(activity.id) === String(id)))
      } catch (error) {
        console.error('Failed to delete run:', error)
      }
    }
  
    if (isLoading) return <Container maxW="container.md" py={8}>Loading...</Container>
  
    return (
      <Container maxW="container.md" py={8}>
        <VStack gap={8} align="stretch">
          <Heading size="xl" mb={6}>Your Activities Bro({activities.length})</Heading>
          
          {activities.map((activity) => (
            <Box 
              key={String(activity.id)}  // Convert ID to string explicitly
              borderWidth="1px"
              borderRadius="lg"
              p={6}
              _hover={{ 
                transform: 'translateY(-2px)',
                transition: 'all 0.2s',
                boxShadow: 'md'
              }}
            >
              <HStack justify="space-between" mb={4}>
                <Heading size="md">{activity.run_title}</Heading>
                <Text color="gray.500">
                  {new Date(activity.created_at).toLocaleDateString()}
                </Text>
              </HStack>
            
              <HStack gap={4} mb={4}>
                <Badge colorScheme="gray">{activity.run_location}</Badge>
                <Badge colorScheme="gray">{activity.distance} miles</Badge>
                <Badge colorScheme="gray">{activity.pace} min/mile</Badge>
              </HStack>
  
              <Box borderBottom="1px" borderColor="gray.200" mb={4} />
  
              <HStack justify="space-between">
                <HStack gap={8}>
                  <Box>
                    <Text color="gray.500" fontSize="sm">Elapsed Time</Text>
                    <Text fontWeight="medium">{activity.elapsed_time} min</Text>
                  </Box>
                  <Box>
                    <Text color="gray.500" fontSize="sm">Working Time</Text>
                    <Text fontWeight="medium">{activity.working_time} min</Text>
                  </Box>
                </HStack>
                <Box>
                  <Text color="gray.500" fontSize="sm">Rating</Text>
                  <Text fontWeight="medium">{'★'.repeat(activity.rating)}</Text>
                </Box>
              </HStack>
  
              <HStack justify="space-between">
                <Box>
                  <IconButton 
                    aria-label="edit" 
                    textStyle="xs" 
                    variant="ghost" 
                    onClick={() => navigate(`/edit/${activity.id}`)}
                    rounded="full"
                  >
                    {/* <CiEdit /> */}
                  </IconButton>
                </Box>
                <HStack gap={4} mt={4}>
                  <Box>
                    <IconButton 
                      aria-label="delete"
                      onClick={() => handleDelete(activity.id)}
                      variant="ghost"
                      rounded="full"
                    >
                      {/* <RiDeleteBinLine /> */}
                    </IconButton>
                  </Box>
                </HStack>
              </HStack>
            </Box>
          ))}
        </VStack>
      </Container>
    )
  }
  
  export default Activities