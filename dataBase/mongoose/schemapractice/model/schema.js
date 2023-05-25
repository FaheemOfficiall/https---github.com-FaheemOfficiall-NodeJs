import mongoose  from "mongoose";

const studentSchema=new mongoose.Schema({
    name: {type:String, required:true, },
    age:{type:Number, required:true, min:18, max:55},  
    fees:{type:mongoose.Decimal128, required:true, validate:(v) => v>=5500.50},
    email:{type:String, required:true, unique:true},
    address:{type:String, required:true, },
    isactive:{type:Boolean},
    join:{type:Date, default:Date.now}

})
// console.log(studentSchema.path('age'));

const studentModel=mongoose.model('student',studentSchema);

const getAllData= ()=>{
    const result= studentModel.find();
    // console.log(result);
}

const studentDoc=new studentModel({
    name: "faheem",
    age:23,  
    fees:5501,
    email:"faheemp503@gmail.com",
    address:"nanded",
    isactive:true,
    

})
const studentDoc2=new studentModel({
    name: "faheem",
    age:23,  
    fees:5501,
    email:"faheempp503@gmail.com",
    address:"nanded",
    isactive:true,
})

// studentDoc2.save()


export {studentModel,getAllData}



///


// Query {
//     _mongooseOptions: {},
//     _transforms: [],
//     _hooks: Kareem { _pres: Map(0) {}, _posts: Map(0) {} },
//     _executionStack: null,
//     mongooseCollection: Collection {
//       collection: null,
//       Promise: [Function: Promise],
//       modelName: 'student',
//       _closed: false,
//       opts: {
//         autoIndex: true,
//         autoCreate: true,
//         schemaUserProvidedOptions: {},
//         capped: false,
//         Promise: undefined,
//         '$wasForceClosed': undefined
//       },
//       name: 'students',
//       collectionName: 'students',
//       conn: NativeConnection {
//         base: [Mongoose],
//         collections: [Object],
//         models: [Object],
//         config: {},
//         replica: false,
//         options: null,
//         otherDbs: [],
//         relatedDbs: {},
//         states: [Object: null prototype],
//         _readyState: 2,
//         _closeCalled: false,
//         _hasOpened: false,
//         plugins: [],
//         id: 0,
//         _queue: [Array],
//         _listening: false,
//         _connectionOptions: [Object],
//         _connectionString: 'mongodb://0.0.0.0:27017/schooldb',
//         client: [MongoClient],
//         '$initialConnection': [Promise]
//       },
//       queue: [],
//       buffer: true,
//       emitter: EventEmitter {
//         _events: [Object: null prototype] {},
//         _eventsCount: 0,
//         _maxListeners: undefined,
//         [Symbol(kCapture)]: false
//       }
//     },
//     model: Model { student },
//     schema: Schema {
//       obj: {
//         name: [Object],
//         age: [Object],
//         fees: [Object],
//         email: [Object],
//         address: [Object],
//         isactive: [Object],
//         join: [Object]
//       },
//       paths: {
//         name: [SchemaString],
//         age: [SchemaNumber],
//         fees: [Decimal128],
//         email: [SchemaString],
//         address: [SchemaString],
//         isactive: [SchemaBoolean],
//         join: [SchemaDate],
//         _id: [ObjectId],
//         __v: [SchemaNumber]
//       },
//       aliases: {},
//       subpaths: {},
//       virtuals: { id: [VirtualType] },
//       singleNestedPaths: {},
//       nested: {},
//       inherits: {},
//       callQueue: [],
//       _indexes: [],
//       methods: {},
//       methodOptions: {},
//       statics: {},
//       tree: {
//         name: [Object],
//         age: [Object],
//         fees: [Object],
//         email: [Object],
//         address: [Object],
//         isactive: [Object],
//         join: [Object],
//         _id: [Object],
//         __v: [Function: Number],
//         id: [VirtualType]
//       },
//       query: {},
//       childSchemas: [],
//       plugins: [ [Object], [Object], [Object], [Object], [Object] ],
//       '$id': 1,
//       mapPaths: [],
//       s: { hooks: [Kareem] },
//       _userProvidedOptions: {},
//       options: {
//         typeKey: 'type',
//         id: true,
//         _id: true,
//         validateBeforeSave: true,
//         read: null,
//         shardKey: null,
//         discriminatorKey: '__t',
//         autoIndex: null,
//         minimize: true,
//         optimisticConcurrency: false,
//         versionKey: '__v',
//         capped: false,
//         bufferCommands: true,
//         strictQuery: false,
//         strict: true,
//         pluralization: true
//       },
//       '$globalPluginsApplied': true,
//       _requiredpaths: [ 'address', 'email', 'fees', 'age', 'name' ]
//     '$useProjection': true
//   }