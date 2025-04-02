import supabase from './supabase'

export const fetchRuns = async () => {
  try {
    const { data, error } = await supabase
      .from('runs')
      .select('*')
      .order('created_at', { ascending: false })

      console.log('Supabase response:', { data, error });


    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching runs:', error)
    throw error
  }
}

export const fetchRun = async (id: string) => {
    try {
      console.log('Fetching run with id:', id)
      const { data, error } = await supabase
        .from('runs')
        .select('*')
        .eq('id', id)
        .single()
  
      if (error) throw error
      console.log('Fetched run:', data)
      return data
    } catch (error) {
      console.error('Error fetching run:', error)
      throw error
    }
  }

export const createRun = async (runData: any) => {
  try {
    const { data, error } = await supabase
      .from('runs')
      .insert([runData])
      .select()

    if (error) throw error
    return data[0]
  } catch (error) {
    console.error('Error creating run:', error)
    throw error
  }
}

export const deleteRun = async (id: string) => {
  try {
    const { error } = await supabase
      .from('runs')
      .delete()
      .eq('id', id)

    if (error) throw error
  } catch (error) {
    console.error('Error deleting run:', error)
    throw error
  }
}

export const updateRun = async (id: string, runData: any) => {
    try {
      console.log('Updating run with id:', id, 'and data:', runData)
      const { data, error } = await supabase
        .from('runs')
        .update(runData)
        .eq('id', id)
        .select()
  
      if (error) throw error
      console.log('Update response:', data)
      return data[0]
    } catch (error) {
      console.error('Error updating run:', error)
      throw error
    }
  }
//const API_URL = 'http://localhost:3000/api'
//This is when we add backend to our project
// export const fetchRuns = async () => {
//   try {
//     const response = await fetch(`${API_URL}/Runs`)
//     if (!response.ok) {
//       throw new Error('Network response was not ok')
//     }
//     return await response.json()
//   } catch (error) {
//     console.error('Error fetching runs:', error)
//     throw error
//   }
// }

// export const fetchRun = async (id: string) => {
//   const response = await fetch(`${API_URL}/Runs/${id}`)
//   if (!response.ok) throw new Error('Failed to fetch run')
//   return response.json()
// }

// export const createRun = async (runData: any) => {
//   try {
//     const response = await fetch(`${API_URL}/Runs`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(runData),
//     })
//     if (!response.ok) {
//       throw new Error('Network response was not ok')
//     }
//     return await response.json()
//   } catch (error) {
//     console.error('Error creating run:', error)
//     throw error
//   }
// }

// export const deleteRun = async (id: string) => {
//   try {
//     const response = await fetch(`${API_URL}/Runs/${id}`, {
//       method: 'DELETE',
//     })
//     if (!response.ok) {
//       throw new Error('Failed to delete run')
//     }
//     return await response.json()
//   } catch (error) {
//     console.error('Error deleting run:', error)
//     throw error
//   }
// }


// export const updateRun = async (id: string, data: any) => {
//   const response = await fetch(`${API_URL}/Runs/${id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data)
//   })
//   if (!response.ok) throw new Error('Failed to update run')
//   return response.json()
// }