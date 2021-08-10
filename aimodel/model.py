import numpy as numpy
import os
import PIL
from PIL import Image
import tensorflow as tf
import tensorflow_datasets as tfds
import matplotlib.pyplot as plts
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.layers import Conv2D, BatchNormalization, Activation, MaxPool2D, Flatten, Dense, Dropout
batch_size = 32
img_height = 100
img_width = 100

tf.keras.backend.clear_session()



def returnData( train , datadir , img_width , img_height , batch_size):
   if train:
      datagen = ImageDataGenerator(
         rescale=1./255,
         horizontal_flip=True,
         height_shift_range=0.5,
         width_shift_range=[-200,200],
         rotation_range=90,
         brightness_range=[0.2,1.0],
         zoom_range=[0.5,1.0]
      )
      return datagen.flow_from_directory(
         datadir, 
         target_size=(img_height, img_height),
         class_mode='binary' , 
         shuffle=True, 
         batch_size=batch_size
      )
   else:
      datagen = ImageDataGenerator(
         rescale=1./255)
      return datagen.flow_from_directory(
         datadir, 
         target_size=(img_height, img_height),
         class_mode='binary' , 
         shuffle=True, 
         batch_size=batch_size
      )







train_ds = returnData(true , '/media/rootuser/HardDisk/projects/AI/locvent/dataset/train' , img_width , img_height , batch_size)
validation_ds = returnData(true ,  '/media/rootuser/HardDisk/projects/AI/locvent/dataset/validation' , img_width , img_height , batch_size)
test_ds = returnData(false , '/media/rootuser/HardDisk/projects/AI/locvent/dataset/test' , img_width , img_height , batch_size)



num_classes = 3

model = tf.keras.Sequential([


  BatchNormalization(),
    MaxPool2D(2),
    
    Conv2D(filters=64, kernel_size=5, padding='same', activation='relu'),
    BatchNormalization(),
    MaxPool2D(2),
  
    Conv2D(filters=90, kernel_size=5, padding='same', activation='relu'),
    BatchNormalization(),
    MaxPool2D(2),
    
    Flatten(),
    Dense(units=1024, activation='relu'),
    Dropout(0.35),
    Dense(num_classes),
])




model.compile(
  optimizer='adam',
  loss=tf.losses.SparseCategoricalCrossentropy(from_logits=True),
  metrics=['accuracy'])


model.fit(
  train_ds,
  validation_data= validation_ds,
   epochs=1
)












































# datagen.flow_from_directory(
#     '/media/rootuser/HardDisk/projects/AI/locvent/dataset/train', 
#     target_size=(img_height, img_height),
#     class_mode='binary' , 
#     shuffle=True, 
#     batch_size=batch_size
#  )



# validation_ds  = datagen.flow_from_directory(
#     '/media/rootuser/HardDisk/projects/AI/locvent/dataset/validation', 
#     target_size=(img_height, img_height), 
#     class_mode='binary', 
#     shuffle=True,
#     batch_size=batch_size
#    )





# # train_ds = tf.keras.preprocessing.image_dataset_from_directory(
# #     "/media/rootuser/HardDisk/projects/AI/locvent/dataset",
# #     validation_split = 0.2,
# #     subset="training",
# #     seed=123,
# #     image_size = (img_height , img_width),
# #     batch_size = batch_size
# # )
# # print (train_ds)





















# train_ds = datagen.flow_from_directory( 
#       '/media/rootuser/HardDisk/projects/AI/locvent/dataset/train', 
#       class_mode = 'binary' , 
#       batch_size=30,
#       target_size = ( img_height , img_width),
#   )

# val_ds = datagen.flow_from_directory( '/media/rootuser/HardDisk/projects/AI/locvent/dataset/validation', 
#     class_mode = 'binary' ,
#     batch_size=30,
#     target_size = ( img_height , img_width),
#  )


# test_ds = datagen.flow_from_directory( 
#     '/media/rootuser/HardDisk/projects/AI/locvent/dataset/test', 
#     class_mode = 'binary' ,
#     batch_size=30,
#     target_size = ( img_height , img_width),
#    )








# # def make_generator():
# #     train_datagen = ImageDataGenerator(rescale=1. / 255)
# #     train_generator =  train_datagen.flow_from_directory('/media/rootuser/HardDisk/projects/AI/locvent/dataset/train',target_size=(100, 100), class_mode='categorical', batch_size=32)
# #     return train_generator

# # train_dataset = tf.data.Dataset.from_generator(make_generator,(tf.float32, tf.float32))


# train_dss = tf.data.Dataset.from_generator(lambda:
#     datagen.flow_from_directory('/media/rootuser/HardDisk/projects/AI/locvent/dataset/train'),(tf.float32, tf.float32))


# val_dss = tf.data.Dataset.from_generator(lambda:
#     datagen.flow_from_directory('/media/rootuser/HardDisk/projects/AI/locvent/dataset/validation'),(tf.float32, tf.float32))



# train_ds = tf.keras.preprocessing.image_dataset_from_directory(
#     "/media/rootuser/HardDisk/projects/AI/locvent/dataset",
#     validation_split = 0.2,
#     subset="training",
#     seed=123,
#     image_size = (img_height , img_width),
#     batch_size = batch_size
# )



# val_ds = tf.keras.preprocessing.image_dataset_from_directory(
#   "/media/rootuser/HardDisk/projects/AI/locvent/dataset",
#   validation_split=0.2,
#   subset="validation",
#   seed=123,
#   image_size=(img_height, img_width),
#   batch_size=batch_size)



  








# print("Evaluate model on test data")
# results = model.evaluate(test_ds, batch_size=30)
# print("test loss, test acc:", results)





