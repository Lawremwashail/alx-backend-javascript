///<reference path="./subjects/Cpp.ts" />
///<reference path="./subjects/Java.ts" />
///<reference path="./subjects/React.ts" />

namespace Subjects {
    export const cTeacher: Teacher = {
        firstName: 'John',
        lastName: 'Doe',
        experienceTeachingC: 10
    };
    console.log('C++');
    cpp.setTeacher(cTeacher);
    console.log(cpp.getRequirements());
    console.log(cpp.getAvailableTeacher());
    
    console.log('Java');
    cpp.setTeacher(cTeacher);
    console.log(java.getRequirements());
    console.log(java.getAvailableTeacher());
    
    console.log('React');
    cpp.setTeacher(cTeacher);
    console.log(react.getRequirements());
    console.log(react.getAvailableTeacher());


}