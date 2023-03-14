import type {NextPage} from 'next';
import Layout from '@/components/layout';
import Item from '@/components/listItem';

const Sold: NextPage = () => {
  return (
    <Layout title="판매내역" canGoBack>
      <div className="flex flex-col space-y-5 pb-10 divide-y">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item key={i} id={i} title="iPhone" subtitle="black" price={99} heart={2} comment={1} />
        ))}
      </div>
    </Layout>
  );
};

export default Sold;
