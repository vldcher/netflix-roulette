import React from 'react';

import Spinner from '../spinner';

function withData(View, getData) {

  const [data, getData] = useState(null);

  useEffect(() => getData(data), []);

    const { data } = this.state;

    if (!data) {
      return <Spinner />;
    }

    return <View {...this.props} data={data} />;
  }

export default withData;
