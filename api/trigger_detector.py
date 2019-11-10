import pandas as pd
import numpy as np
from sklearn.utils import shuffle
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import roc_auc_score
import pickle as pkl


label_list = []
normal_data = pd.read_csv("normal_data.csv", encoding="utf-8")
# print normal_data

# Shuffling non-triggering and triggering words together for the train/test data split

for i in range(len(normal_data["sentence"])):
        normal_data["sentence"][i]=normal_data["sentence"][i].replace("\t","")
for i in range(len(normal_data["sentence"])):
    label_list.append(i)
for l in range(len(label_list)):
    label_list[l] = 0

normal_data["label"] = label_list
trigger_data = pd.read_csv("trigger_data.csv")
trigger_data["sentence"] = trigger_data["sentence"]
label_list = []
for i in range(len(trigger_data["sentence"])):
    label_list.append(i)
for l in range(len(label_list)):
    label_list[l] = 1
trigger_data["label"] = label_list
train_data = shuffle(pd.concat([trigger_data.sample(n=136), normal_data])).reset_index(drop=True)
hate_data = shuffle(pd.concat([trigger_data, normal_data])).reset_index(drop=True)
X_train, X_test, y_train, y_test = train_test_split(train_data["sentence"], train_data["label"], random_state=0)
vect = TfidfVectorizer().fit(X_train)
X_train_vectorized = vect.transform(X_train)

model = LogisticRegression()
model.fit(X_train_vectorized, y_train)

filename = 'final_model.sav'
pkl.dump(model, open(filename, 'wb'))

feature_names = np.array(vect.get_feature_names())
sorted_tfidf_index = model.coef_[0].argsort()

predictions = model.predict(vect.transform(X_test))
print roc_auc_score(y_test, predictions)