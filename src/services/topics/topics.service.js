import supabase from "../../libs/supabase/index";

const GET = async () => {
  try {
    const { data, error } = await supabase.from("topics").select();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const CREATE = () => {};

const UPDATE = () => {};

const DELETE = () => {};

const topicsService = {
  GET,
  CREATE,
  CREATE,
  DELETE,
};

export default topicsService;
