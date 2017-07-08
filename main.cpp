#include <nan.h>

NAN_METHOD(Hello) {
  auto message = Nan::New("Hello from C++!").ToLocalChecked();

  info.GetReturnValue().Set(message);
}

NAN_MODULE_INIT(Initialize) {
  NAN_EXPORT(target, Hello);
}

NODE_MODULE(addon, Initialize);