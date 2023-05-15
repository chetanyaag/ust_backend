# from django.http import JsonResponse
# from django.shortcuts import render
# from .models import LaneData
# from django.core import serializers
# from django.contrib.auth.decorators import login_required

# @login_required
# def table(request):
#     lane_data = LaneData.objects.all()
#     data = {position: {"lane1": {"upper": "", "lower": ""}, "lane2": {"upper": "", "lower": ""}} for position in range(8, 0, -1)}

#     for entry in lane_data:
#         lane = "lane1" if entry.lane == 1 else "lane2"
#         data[entry.position][lane]['upper'] = entry.upper
#         data[entry.position][lane]['lower'] = entry.lower

#     return render(request, 'monotainers_stack/table.html', {'data': data})

# # def table(request):
# #     lane_data = LaneData.objects.all()
# #     data = {}

# #     for entry in lane_data:
# #         lane = "lane1" if entry.lane == 1 else "lane2"
# #         data[f'position{entry.position}_{lane}_upper'] = entry.upper
# #         data[f'position{entry.position}_{lane}_lower'] = entry.lower

# #     return render(request, 'monotainers_stack/table.html', {'data': data})


# def fetch_data(request):
#     data = list(LaneData.objects.values())
#     return JsonResponse(data, safe=False)


# def get_lane_data(request):
#     lane_data = LaneData.objects.all()
#     serialized_data = serializers.serialize('json', lane_data)
#     return JsonResponse(serialized_data, safe=False)




from django.http import JsonResponse
from django.shortcuts import render
from .models import LaneData
from django.core import serializers
import requests

def table(request):
    lane_data = LaneData.objects.all()
    data = {position: {"lane1": {"upper": "", "lower": ""}, "lane2": {"upper": "", "lower": ""}} for position in range(8, 0, -1)}

    for entry in lane_data:
        lane = "lane1" if entry.lane == 1 else "lane2"
        data[entry.position][lane]['upper'] = entry.upper
        data[entry.position][lane]['lower'] = entry.lower

    # return render(request, 'monotainers_stack/table.html', {'data': data})
    return render(request, 'index.html', {'data': data})
# def table(request):
#     lane_data = LaneData.objects.all()
#     data = {}

#     for entry in lane_data:
#         lane = "lane1" if entry.lane == 1 else "lane2"
#         data[f'position{entry.position}_{lane}_upper'] = entry.upper
#         data[f'position{entry.position}_{lane}_lower'] = entry.lower

#     return render(request, 'monotainers_stack/table.html', {'data': data})


def fetch_data(request):
    data = list(LaneData.objects.values())
    return JsonResponse(data, safe=False)

def fetch_data1(request):
    # data = list(LaneData.objects.values())
    url = "http://64.226.75.48/table/fetch_data/"
    headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; rv:91.0) Gecko/20100101 Firefox/91.0'
    }

    ers = requests.get(url, headers=headers)
    try:
        return JsonResponse(ers.json(), safe=False)

    except:
        return JsonResponse([], safe=False)

def get_lane_data(request):
    lane_data = LaneData.objects.all()
    serialized_data = serializers.serialize('json', lane_data)
    return JsonResponse(serialized_data, safe=False)
