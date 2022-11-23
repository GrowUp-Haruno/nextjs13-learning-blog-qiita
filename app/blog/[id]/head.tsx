import { getPost } from '../../../src/lib/getJsonPlaceholder';

type paramsType = {
  id: string;
};

const head = async ({ params }: { params: paramsType }) => {
  const { title } = await getPost(params.id);
  return <title>{title}</title>;
};
export default head;
