import axios from 'axios';
import {
  SafeAreaView,
  ActivityIndicator,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import Config from 'react-native-config';
import {FlatList} from 'react-native-gesture-handler';
import ProductCard from '../../components/Card/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
const Products = ({navigation}) => {
  const {error, loading, data} = useFetch(Config.API_URL);

  const handleProductSelect = id => {
    navigation.navigate('Detail', {id});
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return <FlatList data={data} renderItem={renderProduct} />;
};

export default Products;
