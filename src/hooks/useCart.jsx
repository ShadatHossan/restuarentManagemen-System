import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './UseAxiosSecure';
import useAuth from './useAuth';

const useCart = () => {
    const { user,loading } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    // const token = localStorage.getItem('access-token');
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
    //     queryFn: async () => {
    //         const res = await fetch(`http://localhost:5000/carts?email=${user.email}`,{
    //          headers:{
    //             authorization:`bearer ${token}`
    //          }   
    //         })
    //         return res.json();
    //     },
    // })
    // return [cart, refetch]

     queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })
    return [cart, refetch]

};

export default useCart;