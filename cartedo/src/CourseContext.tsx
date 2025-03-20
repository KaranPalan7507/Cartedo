import { createContext, ReactNode, useContext, useState } from "react";

type IEnrolledCourse = { [id: string]: string };

type EnrolledContextType = {
  enrolledCourses: IEnrolledCourse;
  enroll: (id: number) => void;
  unenroll: (id: number) => void;
};

const CourseContext = createContext<EnrolledContextType | undefined>(undefined);

type EnrolledContextProviderProps = {
  children: ReactNode;
};

export const EnrolledCourseContextProvider = ({
  children,
}: EnrolledContextProviderProps) => {
  const [enrolledCourses, setEnrolledCourses] = useState<IEnrolledCourse>({});
  const enroll = (id: number) => {
    setEnrolledCourses({ ...enrolledCourses, [id]: true });
  };
  const unenroll = (id: number) => {
    setEnrolledCourses({ ...enrolledCourses, [id]: false });
  };
  return (
    <CourseContext.Provider value={{ enroll, unenroll, enrolledCourses }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useEnrolledCourseContext = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("must be wrapperd within provider");
  }
  return context;
};
